import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useApiClient } from '../contexts/apiClient';

const IndexPage: React.VFC = () => {
  const apiClient = useApiClient();
  const projects = useAspidaSWR(apiClient.projects);

  return (
    <>
      <ul>
        {projects.data?.projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
