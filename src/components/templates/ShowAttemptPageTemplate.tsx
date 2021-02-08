import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled from '@material-ui/styles/styled';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$SessionAttempt, View$Task } from '../../types/viewModel';
import MyLink from '../MyLink';
import AttemptStatus from '../AttemptStatusLabel';
import { genTaskTree, TaskNode } from '../../core/TaskNode';
import { DateFormat } from '../../core/consistant';
import WorkflowConfigCode from '../WorkflowConfigCode';

type Props = {
  attempt: ApiResponse<View$SessionAttempt>;
  tasks: ApiResponse<View$Task[]>;
};

const ShpwWorkflowPageTemplate: React.VFC<Props> = ({ attempt, tasks }) => {
  const taskTree = React.useMemo(() => {
    if (!tasks.data) {
      return undefined;
    }
    return genTaskTree(tasks.data);
  }, [tasks]);

  const maxDepth = React.useMemo(() => {
    if (!taskTree) return -1;
    const f = (node: TaskNode): number => {
      if (!node.isGroup) return node.depth;
      return node.nodes.reduce((acc, n) => Math.max(acc, f(n)), 0);
    };
    return f(taskTree);
  }, [taskTree]);

  if (!attempt.data) {
    return null;
  }

  console.log(taskTree);

  return (
    <>
      <PageSection title="Attempt">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell width="300">ID</TableCell>
              <TableCell>{attempt.data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Workflow</TableCell>
              <TableCell>
                <MyLink to={`/workflows/${attempt.data.workflowId}`}>
                  {attempt.data.workflowName}
                </MyLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SessionID</TableCell>
              <TableCell>
                <MyLink to={`/sessions/${attempt.data.sessionId}`}>
                  {attempt.data.sessionId}
                </MyLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SessionTime</TableCell>
              <TableCell>
                {attempt.data.sessionTime.format(DateFormat)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CreatedAt</TableCell>
              <TableCell>{attempt.data.createdAt.format(DateFormat)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>FinishedAt</TableCell>
              <TableCell>
                {attempt.data.finishedAt?.format(DateFormat)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>
                <AttemptStatus status={attempt.data.status} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </PageSection>
      <PageSection title="タスク">
        <TaskTableHeader>
          <TaskNameCell>Name</TaskNameCell>
          <TaskTimeCell>StartedAt</TaskTimeCell>
          <TaskTimeCell>UpdatedAt</TaskTimeCell>
          <TaskMiscCell>Status</TaskMiscCell>
        </TaskTableHeader>
        {taskTree && <TaskTree node={taskTree} maxDepth={maxDepth} />}
      </PageSection>
    </>
  );
};

const TaskTableHeader = styled('div')({
  background: '#fff',
  borderBottom: '1px solid rgba(224, 224, 224, 1)',
  display: 'flex',
  position: 'sticky',
  top: 0,
});

const TaskRowGroup = styled('div')({
  background: '#fff',
  '&:hover': {
    background: 'rgb(245, 245, 245)',
  },
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
  '&.success': {
    background: '#f1f8e9',
  },
  '&.running': {
    background: '#e0f7fa',
  },
  '&.error': {
    background: '#ffccbc',
  },
  '&.group_error': {
    background: '#fbe9e7',
  },
  '&.blocked': {
    background: '#f5f5f5',
  },
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
    color: 'green',
  },
  '&.running': {
    color: 'blue',
  },
  '&.error': {
    color: 'red',
  },
  '&.group_error': {
    color: 'red',
  },
  '&.blocked': {
    color: '#bdbdbd',
  },
});

type TaskTreeProps = {
  node: TaskNode;
  maxDepth: number;
};

const TaskTree = React.memo<TaskTreeProps>(({ node, maxDepth }) => {
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
        {node.isGroup &&
          node.nodes.map((n) => (
            <TaskTree key={n.id} node={n} maxDepth={maxDepth} />
          ))}
      </TaskChildrenRow>
    </TaskRowGroup>
  );
});

ShpwWorkflowPageTemplate.displayName = 'ShpwWorkflowPageTemplate';

export default ShpwWorkflowPageTemplate;
