import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import styled from '@material-ui/styles/styled';
import * as React from 'react';

import WorkflowConfigCode from './WorkflowConfigCode';
import { DateFormat } from '../core/consistant';
import { TaskNode } from '../core/TaskNode';
import { Colors, ColorSet } from '../core/colors';

const TaskTableHeader = styled('div')({
  background: '#fff',
  borderBottom: '1px solid rgba(224, 224, 224, 1)',
  display: 'flex',
  position: 'sticky',
  top: 0,
});

const rowBgs = (...pairs: [string, ColorSet][]) => {
  return Object.fromEntries(
    pairs.map(([status, colorSet]) => {
      return [
        `&.${status}`,
        {
          background: colorSet.bg,
          '&:hover': {
            background: colorSet.hover,
          },
        },
      ];
    }),
  );
};

const TaskRowGroup = styled('div')({
  '& &': {
    border: '1px solid rgba(224, 224, 224, 1)',
    borderRight: 0,

    '&:last-child': {
      borderBottom: 0,
    },
  },
  '& + &': {
    borderTop: 0,
  },
  ...rowBgs(
    ['success', Colors.Success],
    ['planned', Colors.Planned],
    ['running', Colors.Running],
    ['error', Colors.Error],
    ['group_error', Colors.GroupError],
    ['blocked', Colors.Blocked],
  ),
});

const TaskInfoRow = styled('div')({
  display: 'flex',
});

const TaskCell = (props: Omit<TableCellProps, 'comoponent'>) => (
  <TableCell {...props} component="div" style={{ borderBottom: 0 }} />
);

const TaskNameCell = styled(TaskCell)({
  flexGrow: 1,
});

const TaskTimeCell = styled(TaskCell)({
  width: 180,
});

const TaskMiscCell = styled(TaskCell)({
  width: 130,
  textAlign: 'center',
});

const TaskChildrenRow = styled('div')({
  paddingLeft: 24,
});

const TaskRowMenu = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '8px 16px',
});

const NodeStatusLabel = styled('span')({
  '&.success': {
    color: Colors.Success.text,
  },
  '&.planned': {
    color: Colors.Planned.text,
  },
  '&.running': {
    color: Colors.Running.text,
  },
  '&.error': {
    color: Colors.Error.text,
  },
  '&.group_error': {
    color: Colors.GroupError.text,
  },
  '&.blocked': {
    color: Colors.Blocked.text,
  },
});

type TaskRowProps = {
  node: TaskNode;
};

const TaskRows = React.memo<TaskRowProps>(({ node }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openConfigDialog, setOpenConfigDialog] = React.useState(false);

  const onMouseEnter = () => setMenuOpen(true);
  const onMouseLeave = () => setMenuOpen(false);

  const onConfigDialogOpen = () => setOpenConfigDialog(true);
  const onConfigDialogClose = () => setOpenConfigDialog(false);

  return (
    <TaskRowGroup className={node.state}>
      <Dialog
        open={openConfigDialog}
        onClose={onConfigDialogClose}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>{node.fullName}</DialogTitle>
        <WorkflowConfigCode config={node.config} />
      </Dialog>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <TaskInfoRow className={node.state}>
          <TaskNameCell>
            <span title={node.fullName}>{node.name}</span>
          </TaskNameCell>
          <TaskTimeCell>{node.startedAt?.format(DateFormat)}</TaskTimeCell>
          <TaskTimeCell>{node.updatedAt?.format(DateFormat)}</TaskTimeCell>
          <TaskMiscCell>
            <NodeStatusLabel className={node.state}>
              {node.state}
            </NodeStatusLabel>
          </TaskMiscCell>
        </TaskInfoRow>
        {menuOpen && (
          <TaskRowMenu>
            <Button color="primary">ログ</Button>
            <Button color="secondary" onClick={onConfigDialogOpen}>
              定義を開く
            </Button>
          </TaskRowMenu>
        )}
      </div>
      <TaskChildrenRow>
        <div style={{ background: 'white' }}>
          {node.isGroup &&
            node.nodes.map((n) => <TaskRows key={n.id} node={n} />)}
        </div>
      </TaskChildrenRow>
    </TaskRowGroup>
  );
});

type Props = {
  node: TaskNode;
};

const TasksTable: React.VFC<Props> = ({ node }) => (
  <div>
    <TaskTableHeader>
      <TaskNameCell>Name</TaskNameCell>
      <TaskTimeCell>StartedAt</TaskTimeCell>
      <TaskTimeCell>UpdatedAt</TaskTimeCell>
      <TaskMiscCell>Status</TaskMiscCell>
    </TaskTableHeader>
    <TaskRows node={node} />
  </div>
);

TasksTable.displayName = 'TasksTable';

export default TasksTable;
