import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import ShowAttemptPageTemplate from '../components/templates/ShowAttemptPageTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSessionAttempt, toTask } from '../core/viewModel';

type PathParam = {
  id: string;
};

type Props = {
  id: number;
};

const ShowAttemptPage: React.VFC<Props> = ({ id }) => {
  const apiClient = useApiClient();
  const attemptRes = useAspidaSWR(apiClient.attempts._id(id));
  const attempt = toApiResponse(attemptRes, toSessionAttempt);

  const tasksRes = useAspidaSWR(apiClient.attempts._id(id).tasks);
  const tasks = toApiResponse(tasksRes, (d) => d.tasks.map(toTask));

  return <ShowAttemptPageTemplate attempt={attempt} tasks={tasks} />;
};

ShowAttemptPage.displayName = 'ShowAttemptPage';

export default () => {
  const params = useParams<PathParam>();
  const id = Number(params.id);
  if (isNaN(id)) {
    return <h1>400</h1>;
  }
  return <ShowAttemptPage id={id} />;
};
