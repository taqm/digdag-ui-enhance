import * as React from 'react';

import AttemptsPageTemplate from '../components/templates/AttemptsPageTemplate';

import { useApiClient } from '../contexts/apiClient';
import { toSessionAttempt } from '../core/viewModel';
import { useGetAllData } from '../hooks/api';

const AttemptsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const attempts = useGetAllData(async (ps, lid) => {
    const res = await apiClient.attempts.get({
      query: {
        page_size: ps,
        last_id: lid,
      },
    });
    return res.body.attempts.map(toSessionAttempt);
  });

  return <AttemptsPageTemplate attempts={attempts} />;
};

AttemptsPage.displayName = 'AttemptsPage';

export default AttemptsPage;
