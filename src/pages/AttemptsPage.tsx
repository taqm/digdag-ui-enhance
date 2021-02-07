import useAspidaSWR from '@aspida/swr';
import * as React from 'react';

import AttemptsPageTemplate from '../components/templates/AttemptsPageTemplate';

import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSessionAttempt } from '../core/viewModel';

const AttemptsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const attemptsRes = useAspidaSWR(apiClient.attempts);
  const attempts = toApiResponse(attemptsRes, (d) =>
    d.attempts.map(toSessionAttempt),
  );

  return <AttemptsPageTemplate attempts={attempts} />;
};

AttemptsPage.displayName = 'AttemptsPage';

export default AttemptsPage;
