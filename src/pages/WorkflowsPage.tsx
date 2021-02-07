import useAspidaSWR from '@aspida/swr';
import * as React from 'react';

import WorkflowsPageTemplate from '../components/templates/WorkflowsPageTemplate';

import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toWorkflow } from '../core/viewModel';

const WorkflowsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const workflowsRes = useAspidaSWR(apiClient.workflows);
  const workflows = toApiResponse(workflowsRes, (d) =>
    d.workflows.map(toWorkflow),
  );

  return <WorkflowsPageTemplate workflows={workflows} />;
};

WorkflowsPage.displayName = 'WorkflowsPage';

export default WorkflowsPage;
