import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$Project, View$Workflow } from '../../types/viewModel';
import WorkflowsTable from '../WorkflowsTable';

type Props = {
  project: ApiResponse<View$Project>;
  workflows: ApiResponse<View$Workflow[]>;
};

const ShpwProjectPageTemplate: React.VFC<Props> = ({ project, workflows }) => {
  if (!project.data) {
    return null;
  }

  return (
    <>
      <PageSection title="プロジェクト">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{project.data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{project.data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Revision</TableCell>
              <TableCell>{project.data.revision}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </PageSection>
      <PageSection title="ワークフロー">
        {workflows.data && <WorkflowsTable workflows={workflows.data} />}
      </PageSection>
    </>
  );
};

ShpwProjectPageTemplate.displayName = 'ShpwProjectPageTemplate';

export default ShpwProjectPageTemplate;
