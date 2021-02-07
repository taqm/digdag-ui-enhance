import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ShowSessionPageTemplate from '../components/templates/ShowSessionPageTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSession, toSessionAttempt } from '../core/viewModel';

type PathParam = {
  id: string;
};

type Props = {
  id: number;
};

const ShowSessionPage: React.VFC<Props> = ({ id }) => {
  const apiClient = useApiClient();

  const sessionRes = useAspidaSWR(apiClient.sessions._id(id));
  const session = toApiResponse(sessionRes, toSession);

  const sessionId = session.data?.id ?? -1;
  const attemptsRes = useAspidaSWR(apiClient.sessions._id(sessionId).attempts, {
    enabled: sessionId !== -1,
  });
  const attempts = toApiResponse(attemptsRes, (d) =>
    d.attempts.map(toSessionAttempt),
  );

  return <ShowSessionPageTemplate session={session} attempts={attempts} />;
};

ShowSessionPage.displayName = 'ShowSessionPage';

export default () => {
  const params = useParams<PathParam>();
  const id = Number(params.id);
  if (isNaN(id)) {
    return <h1>400</h1>;
  }
  return <ShowSessionPage id={id} />;
};
