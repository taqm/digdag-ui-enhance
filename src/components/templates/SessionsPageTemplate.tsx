import * as React from 'react';

import PageSection from '../PageSection';
import { View$Session } from '../../types/viewModel';
import SessionsTable from '../SessionsTable';

type Props = {
  sessions: ApiResponse<View$Session[]>;
};

const ProjectsPageTemplate: React.VFC<Props> = ({ sessions }) => {
  if (!sessions.data) {
    return null;
  }

  return (
    <PageSection title="セッション一覧">
      <SessionsTable sessions={sessions.data} />
    </PageSection>
  );
};

ProjectsPageTemplate.displayName = 'IndexPageTemplate';

export default ProjectsPageTemplate;
