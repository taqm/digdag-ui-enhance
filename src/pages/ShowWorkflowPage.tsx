import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ShpwWorkflowPageTemplate from '../components/templates/ShowWorkflowTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSession, toWorkflow } from '../core/viewModel';

type PathParam = {
  id: string;
};

type Props = {
  id: number;
};

const ShowWorkflowPage: React.VFC<Props> = ({ id }) => {
  const apiClient = useApiClient();

  const workflowRes = useAspidaSWR(apiClient.workflows._id(id));
  const workflow = toApiResponse(workflowRes, toWorkflow);

  const projectId = workflow.data?.projectId ?? -1;
  const sessionsRes = useAspidaSWR(
    apiClient.projects._id(workflow.data?.projectId ?? -1).sessions,
    {
      query: { workflow: workflow.data?.name },
      enabled: projectId !== -1,
    },
  );
  const sessions = toApiResponse(sessionsRes, (d) => d.sessions.map(toSession));

  return <ShpwWorkflowPageTemplate workflow={workflow} sessions={sessions} />;
};

ShowWorkflowPage.displayName = 'ShowWorkflowPage';

export default () => {
  const params = useParams<PathParam>();
  const id = Number(params.id);
  if (isNaN(id)) {
    return <h1>400</h1>;
  }
  return <ShowWorkflowPage id={id} />;
};
