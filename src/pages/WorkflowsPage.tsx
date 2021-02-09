import * as React from 'react';

import WorkflowsPageTemplate from '../components/templates/WorkflowsPageTemplate';

import { useApiClient } from '../contexts/apiClient';
import { toWorkflow } from '../core/viewModel';
import { useGetAllData } from '../hooks/api';

const WorkflowsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const workflows = useGetAllData(async (ps, lid) => {
    const res = await apiClient.workflows.get({
      query: { count: ps, last_id: lid },
    });
    return res.body.workflows.map(toWorkflow);
  });

  return <WorkflowsPageTemplate workflows={workflows} />;
};

WorkflowsPage.displayName = 'WorkflowsPage';

export default WorkflowsPage;
