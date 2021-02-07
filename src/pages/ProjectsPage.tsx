import useAspidaSWR from '@aspida/swr';
import * as React from 'react';

import ProjectsPageTemplate from '../components/templates/ProjectsPageTemplate';

import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toProject } from '../core/viewModel';

const ProjectsPage: React.VFC = () => {
  const apiClient = useApiClient();
  const projectsRes = useAspidaSWR(apiClient.projects);
  const projects = toApiResponse(projectsRes, (d) => d.projects.map(toProject));

  return <ProjectsPageTemplate projects={projects} />;
};

ProjectsPage.displayName = 'IndexPage';

export default ProjectsPage;
