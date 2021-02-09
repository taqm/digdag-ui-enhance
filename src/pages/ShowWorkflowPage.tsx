import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ShpwWorkflowPageTemplate from '../components/templates/ShowWorkflowTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSession, toWorkflow } from '../core/viewModel';
import { useGetAllData } from '../hooks/api';

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
  const sessions = useGetAllData(async (ps, lid) => {
    const res = await apiClient.projects._id(projectId).sessions.get({
      query: { workflow: workflow.data?.name, page_size: ps, last_id: lid },
    });
    return res.body.sessions.map(toSession);
  }, projectId !== -1);

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
