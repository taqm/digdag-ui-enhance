import useAspidaSWR from '@aspida/swr';
import * as React from 'react';

import SessionsPageTemplate from '../components/templates/SessionsPageTemplate';

import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSession } from '../core/viewModel';

const SessionsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const sessionsRes = useAspidaSWR(apiClient.sessions);
  const sessions = toApiResponse(sessionsRes, (d) => d.sessions.map(toSession));

  return <SessionsPageTemplate sessions={sessions} />;
};

SessionsPage.displayName = 'SessionsPage';

export default SessionsPage;
