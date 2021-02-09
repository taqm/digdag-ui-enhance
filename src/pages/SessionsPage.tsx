import * as React from 'react';

import SessionsPageTemplate from '../components/templates/SessionsPageTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toSession } from '../core/viewModel';
import { useGetAllData } from '../hooks/api';

const SessionsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const sessions = useGetAllData(async (ps, lid) => {
    const res = await apiClient.sessions.get({
      query: {
        page_size: ps,
        last_id: lid,
      },
    });
    return res.body.sessions.map(toSession);
  });

  return <SessionsPageTemplate sessions={sessions} />;
};

SessionsPage.displayName = 'SessionsPage';

export default SessionsPage;
