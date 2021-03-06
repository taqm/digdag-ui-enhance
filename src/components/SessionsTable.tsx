import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styled from '@material-ui/styles/styled';
import * as React from 'react';

import MyLink from './MyLink';

import { View$Session } from '../types/viewModel';
import AttemptStatus from './AttemptStatusLabel';
import { Colors, hasStatusRowStyles } from '../core/colors';

type Props = {
  sessions: View$Session[];
};

const SessionRow = styled(TableRow)({
  ...hasStatusRowStyles(
    ['success', Colors.Success],
    ['error', Colors.GroupError],
    ['running', Colors.Running],
    ['killed', Colors.Killed],
  ),
});

const SessionsTable: React.VFC<Props> = ({ sessions }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell width="80" align="center">
          ID
        </TableCell>
        <TableCell>ProjectName</TableCell>
        <TableCell>WorkflowName</TableCell>
        <TableCell>SessionTime</TableCell>
        <TableCell>FinishedAt</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {sessions.map((s) => (
        <SessionRow key={s.id} className={s.lastAttempt.status}>
          <TableCell align="center">
            <MyLink to={`/sessions/${s.id}`}>{s.id}</MyLink>
          </TableCell>
          <TableCell>
            <MyLink to={`/projects/${s.projectId}`}>{s.projectName}</MyLink>
          </TableCell>
          <TableCell>
            <MyLink to={`/workflows/${s.workflowId}`}>{s.workflowName}</MyLink>
          </TableCell>
          <TableCell>{s.sessionTime.format('YYYY-MM-DD HH:mm:ss')}</TableCell>
          <TableCell>
            {s.lastAttempt.finishedAt?.format('YYYY-MM-DD HH:mm:ss')}
          </TableCell>
          <TableCell>
            <MyLink to={`/attempts/${s.lastAttempt.id}`}>
              <AttemptStatus status={s.lastAttempt.status} />
            </MyLink>
          </TableCell>
        </SessionRow>
      ))}
    </TableBody>
  </Table>
);

SessionsTable.displayName = 'SessionsTable';

export default SessionsTable;
