import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ShpwProjectPageTemplate from '../components/templates/ShowProjectTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toProject, toWorkflow } from '../core/viewModel';

type PathParam = {
  id: string;
};

type Props = {
  id: number;
};

const ShowProjectPage: React.VFC<Props> = ({ id }) => {
  const apiClient = useApiClient();
  const projectRes = useAspidaSWR(apiClient.projects._id(id));
  const project = toApiResponse(projectRes, toProject);

  const workflowsRes = useAspidaSWR(apiClient.projects._id(id).workflows);
  const workflows = toApiResponse(workflowsRes, (d) =>
    d.workflows.map(toWorkflow),
  );

  return <ShpwProjectPageTemplate project={project} workflows={workflows} />;
};

ShowProjectPage.displayName = 'ShowProjectPage';

export default () => {
  const params = useParams<PathParam>();
  const id = Number(params.id);
  if (isNaN(id)) {
    return <h1>400</h1>;
  }
  return <ShowProjectPage id={id} />;
};
