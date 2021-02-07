import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import PageSection from '../PageSection';
import { View$SessionAttempt } from '../../types/viewModel';
import MyLink from '../MyLink';
import AttemptStatus from '../AttemptStatusLabel';

type Props = {
  attempt: ApiResponse<View$SessionAttempt>;
};

const ShpwWorkflowPageTemplate: React.VFC<Props> = ({ attempt }) => {
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
    </>
  );
};

ShpwWorkflowPageTemplate.displayName = 'ShpwWorkflowPageTemplate';

export default ShpwWorkflowPageTemplate;
