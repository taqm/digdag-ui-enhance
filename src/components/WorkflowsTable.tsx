import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import MyLink from './MyLink';

import { View$Workflow } from '../types/viewModel';

type Props = {
  workflows: View$Workflow[];
};

const WorkflowsTable: React.VFC<Props> = ({ workflows }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell width="80" align="center">
          ID
        </TableCell>
        <TableCell width="500">Name</TableCell>
        <TableCell>Project</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {workflows.map((w) => (
        <TableRow key={w.id}>
          <TableCell align="center">
            <MyLink to={`/workflows/${w.id}`}>{w.id}</MyLink>
          </TableCell>
          <TableCell>
            <MyLink to={`/workflows/${w.id}`}>{w.name}</MyLink>
          </TableCell>
          <TableCell>
            <MyLink to={`/projects/${w.projectId}`}>{w.projectName}</MyLink>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

WorkflowsTable.displayName = 'WorkflowsTable';

export default WorkflowsTable;
