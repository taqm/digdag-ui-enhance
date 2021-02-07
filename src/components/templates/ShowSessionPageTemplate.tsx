import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$Session, View$SessionAttempt } from '../../types/viewModel';
import MyLink from '../MyLink';
import AttemptsTable from '../AttemptsTable';

type Props = {
  session: ApiResponse<View$Session>;
  attempts: ApiResponse<View$SessionAttempt[]>;
};

const ShpwWorkflowPageTemplate: React.VFC<Props> = ({ session, attempts }) => {
  if (!session.data) {
    return null;
  }

  return (
    <>
      <PageSection title="セッション">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell width="300">ID</TableCell>
              <TableCell>{session.data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>
                <MyLink to={`/projects/${session.data.projectId}`}>
                  {session.data.projectName}
                </MyLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Workflow</TableCell>
              <TableCell>
                <MyLink to={`/workflows/${session.data.workflowId}`}>
                  {session.data.workflowName}
                </MyLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SessionTime</TableCell>
              <TableCell>
                {session.data.sessionTime.format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </PageSection>

      <PageSection title="Attempts">
        {attempts.data && <AttemptsTable attempts={attempts.data} />}
      </PageSection>
    </>
  );
};

ShpwWorkflowPageTemplate.displayName = 'ShpwWorkflowPageTemplate';

export default ShpwWorkflowPageTemplate;
