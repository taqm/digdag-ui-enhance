import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$Session, View$Workflow } from '../../types/viewModel';
import MyLink from '../MyLink';
import SessionsTable from '../SessionsTable';
import WorkflowConfigCode from '../WorkflowConfigCode';

type Props = {
  workflow: ApiResponse<View$Workflow>;
  sessions: ApiResponse<View$Session[]>;
};

const ShpwWorkflowPageTemplate: React.VFC<Props> = ({ workflow, sessions }) => {
  const [openConfig, setOpenConfig] = React.useState(false);

  const onOpenConfig = () => setOpenConfig(true);
  const onCloseConfig = () => setOpenConfig(false);

  if (!workflow.data) {
    return null;
  }

  return (
    <>
      <PageSection title="ワークフロー">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell width="300">ID</TableCell>
              <TableCell>{workflow.data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{workflow.data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>
                <MyLink to={`/projects/${workflow.data.projectId}`}>
                  {workflow.data.projectName}
                </MyLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>定義</TableCell>
              <TableCell>
                <Button onClick={onOpenConfig} color="secondary">
                  開く
                </Button>
                <Dialog open={openConfig} onClose={onCloseConfig} maxWidth="lg">
                  <DialogTitle>定義ファイル</DialogTitle>
                  <WorkflowConfigCode config={workflow.data.config} />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </PageSection>

      <PageSection title="セッション">
        {sessions.data && <SessionsTable sessions={sessions.data} />}
      </PageSection>
    </>
  );
};

ShpwWorkflowPageTemplate.displayName = 'ShpwWorkflowPageTemplate';

export default ShpwWorkflowPageTemplate;
