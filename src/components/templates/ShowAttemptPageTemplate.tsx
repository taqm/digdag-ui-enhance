import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$SessionAttempt, View$Task } from '../../types/viewModel';
import MyLink from '../MyLink';
import AttemptStatus from '../AttemptStatusLabel';

type Props = {
  attempt: ApiResponse<View$SessionAttempt>;
  tasks: ApiResponse<View$Task[]>;
};

const ShpwWorkflowPageTemplate: React.VFC<Props> = ({ attempt, tasks }) => {
  const rootTask = React.useMemo(() => {
    if (!tasks.data) return undefined;
    return tasks.data[0];
  }, [tasks]);

  const taskRels = React.useMemo(() => {
    if (!tasks.data) return undefined;
    return tasks.data.reduce((acc, cur) => {
      const parentId = cur.parentId;
      const wk = acc[parentId] ?? [];
      return { ...acc, [parentId]: [...wk, cur] };
    }, {} as Record<number, View$Task[]>);
  }, [tasks]);

  if (!attempt.data) {
    return null;
  }

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
                {attempt.data.sessionTime.format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CreatedAt</TableCell>
              <TableCell>
                {attempt.data.createdAt.format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>FinishedAt</TableCell>
              <TableCell>
                {attempt.data.finishedAt?.format('YYYY-MM-DD HH:mm:ss')}
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
        {rootTask && taskRels && (
          <ul>
            <Hoge task={rootTask} rels={taskRels} depth={0} />
          </ul>
        )}
      </PageSection>
    </>
  );
};

type HogeProps = {
  task: View$Task;
  parent?: View$Task;
  rels: Record<number, View$Task[]>;
  depth: number;
};

const Hoge = ({ task, parent, rels, depth }: HogeProps) => {
  const taskName = task.fullName.replace(parent?.fullName ?? '', '');
  if (!task.isGroup) {
    return (
      <li style={{ alignItems: 'start' }}>
        <ListItemText>{taskName}</ListItemText>
      </li>
    );
  }
  const children = rels[task.id];

  return (
    <li>
      <div>{taskName}</div>
      <ul>
        {children?.map((c) => (
          <Hoge task={c} parent={task} rels={rels} depth={depth + 1} />
        ))}
      </ul>
    </li>
  );
};

ShpwWorkflowPageTemplate.displayName = 'ShpwWorkflowPageTemplate';

export default ShpwWorkflowPageTemplate;
