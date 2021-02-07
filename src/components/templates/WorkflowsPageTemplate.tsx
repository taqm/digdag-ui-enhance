import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import MyLink from '../MyLink';
import PageSection from '../PageSection';
import { View$Workflow } from '../../types/viewModel';

type Props = {
  workflows: ApiResponse<View$Workflow[]>;
};

const WorkflowsPageTemplate: React.VFC<Props> = ({ workflows }) => {
  if (!workflows.data) {
    return null;
  }

  return (
    <PageSection title="ワークフロー">
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
          {workflows.data?.map((w) => (
            <TableRow key={w.id}>
              <TableCell align="center">
                <MyLink to={`/workflow/${w.id}`}>{w.id}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink to={`/workflow/${w.id}`}>{w.name}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink to={`/projects/${w.projectId}`}>{w.projectName}</MyLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageSection>
  );
};

WorkflowsPageTemplate.displayName = 'WorkflowsPageTemplate';

export default WorkflowsPageTemplate;
