import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import MyLink from './MyLink';

import { View$SessionAttempt } from '../types/viewModel';
import AttemptStatus from './AttemptStatusLabel';

type Props = {
  attempts: View$SessionAttempt[];
};

const AttemptsTable: React.VFC<Props> = ({ attempts }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell width="80" align="center">
          ID
        </TableCell>
        <TableCell>Workflow</TableCell>
        <TableCell>SessionTime</TableCell>
        <TableCell>Created</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {attempts.map((a) => (
        <TableRow key={a.id}>
          <TableCell align="center">
            <MyLink to={`/attempts/${a.id}`}>{a.id}</MyLink>
          </TableCell>
          <TableCell>
            <MyLink to={`/workflows/${a.workflowId}`}>{a.workflowName}</MyLink>
          </TableCell>
          <TableCell>{a.sessionTime.format('YYYY-MM-DD HH:mm:ss')}</TableCell>
          <TableCell>{a.createdAt.format('YYYY-MM-DD HH:mm:ss')}</TableCell>
          <TableCell>
            <AttemptStatus status={a.status} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

AttemptsTable.displayName = 'WorkflowsTable';

export default AttemptsTable;
