import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import MyLink from '../MyLink';
import PageSection from '../PageSection';
import { View$Session } from '../../types/viewModel';
import AttemptStatus from '../AttemptStatusLabel';

type Props = {
  sessions: ApiResponse<View$Session[]>;
};

const ProjectsPageTemplate: React.VFC<Props> = ({ sessions }) => {
  if (!sessions.data) {
    return null;
  }

  return (
    <PageSection title="セッション一覧">
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
          {sessions.data?.map((s) => (
            <TableRow key={s.id}>
              <TableCell align="center">
                <MyLink to={`/sessions/${s.id}`}>{s.id}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink to={`/projects/${s.projectId}`}>{s.projectName}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink to={`/workflows/${s.workflowId}`}>
                  {s.workflowName}
                </MyLink>
              </TableCell>
              <TableCell>
                {s.sessionTime.format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
              <TableCell>
                {s.lastAttempt.finishedAt?.format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
              <TableCell>
                <MyLink to={`/attempts/${s.lastAttempt.id}`}>
                  <AttemptStatus status={s.lastAttempt.status} />
                </MyLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageSection>
  );
};

ProjectsPageTemplate.displayName = 'IndexPageTemplate';

export default ProjectsPageTemplate;
