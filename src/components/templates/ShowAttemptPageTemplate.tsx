import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$SessionAttempt, View$Task } from '../../types/viewModel';
import MyLink from '../MyLink';
import AttemptStatus from '../AttemptStatusLabel';
import { genTaskTree } from '../../core/TaskNode';
import { DateFormat } from '../../core/consistant';
import TasksTable from '../TasksTable';

type Props = {
  attempt: ApiResponse<View$SessionAttempt>;
  tasks: ApiResponse<View$Task[]>;
  logFileExistTasks: Record<string, boolean>;
  onLogFileOpen: (taskFullName: string) => void;
};

const ShpwWorkflowPageTemplate: React.VFC<Props> = ({
  attempt,
  tasks,
  logFileExistTasks,
  onLogFileOpen,
}) => {
  const taskTree = React.useMemo(() => {
    if (!tasks.data) {
      return undefined;
    }
    return genTaskTree(tasks.data);
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
        {taskTree && (
          <TasksTable
            node={taskTree}
            logFileExistTasks={logFileExistTasks}
            onLogFileOpenButtonClick={onLogFileOpen}
          />
        )}
      </PageSection>
    </>
  );
};

ShpwWorkflowPageTemplate.displayName = 'ShpwWorkflowPageTemplate';

export default ShpwWorkflowPageTemplate;
