import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import ShowAttemptPageTemplate from '../components/templates/ShowAttemptPageTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSessionAttempt } from '../core/viewModel';

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

  return <ShowAttemptPageTemplate attempt={attempt} />;
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
