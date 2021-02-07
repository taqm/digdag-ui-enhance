import useAspidaSWR from '@aspida/swr';
import * as React from 'react';

import IndexPageTemplate from '../components/templates/IndexPageTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toProject } from '../core/viewModel';

const IndexPage: React.VFC = () => {
  const apiClient = useApiClient();
  const projectsRes = useAspidaSWR(apiClient.projects);
  const projects = toApiResponse(projectsRes, (d) => d.projects.map(toProject));

  return <IndexPageTemplate projects={projects} />;
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
