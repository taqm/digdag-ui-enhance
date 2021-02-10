import useAspidaSWR from '@aspida/swr';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { useParams } from 'react-router-dom';
import pako from 'pako';

import ShowAttemptPageTemplate from '../components/templates/ShowAttemptPageTemplate';
import { useApiClient } from '../contexts/apiClient';
import { toApiResponse, toSessionAttempt, toTask } from '../core/viewModel';
import LogPageContentt from '../components/templates/LogPageContent';
import { RestLogFileHandleCollection } from '../api/@types';

type PathParam = {
  id: string;
};

type Props = {
  id: number;
};

const openLogForNewWindow = async (taskName: string, logRes: Response) => {
  const log = await logRes.body?.getReader().read();
  if (!log) {
    return;
  }
  const result = pako.inflate(log.value!);
  const txt = String.fromCharCode.apply(null, result as any);
  const w = window.open('about:blank', undefined, 'width=800,height=640');

  if (w) {
    w.document.title = `${taskName}のログ`;
    w.document.body.innerHTML = renderToString(
      <LogPageContentt taskName={taskName} text={txt} />,
    );
  }
};

const useLogFileOpenHandler = (
  attemptId: number,
  logFilesRes?: RestLogFileHandleCollection,
) => {
  const apiClient = useApiClient();

  return React.useCallback(
    async (taskFullName: string) => {
      if (!logFilesRes) {
        console.error('files is not exists');
        alert('エラーが発生しました');
        return;
      }
      const targetFile = logFilesRes.files.find(
        (v) => v.taskName === taskFullName,
      );
      if (!targetFile) {
        alert('ログファイルが見つかりませんでした');
        return;
      }
      const logFileRes = await apiClient.logs
        ._attempt_id(attemptId)
        .files._file_name(targetFile.fileName)
        .get();
      openLogForNewWindow(taskFullName, logFileRes.originalResponse);
    },
    [attemptId, logFilesRes],
  );
};

const ShowAttemptPage: React.VFC<Props> = ({ id }) => {
  const apiClient = useApiClient();
  const attemptRes = useAspidaSWR(apiClient.attempts._id(id));
  const attempt = toApiResponse(attemptRes, toSessionAttempt);

  const tasksRes = useAspidaSWR(apiClient.attempts._id(id).tasks, {
    refreshInterval: 1000 * 15, // 15sec
  });
  const tasks = toApiResponse(tasksRes, (d) => d.tasks.map(toTask));

  const filesRes = useAspidaSWR(apiClient.logs._attempt_id(id).files);

  const onLogFileOpenHandler = useLogFileOpenHandler(id, filesRes.data);

  return (
    <ShowAttemptPageTemplate
      attempt={attempt}
      tasks={tasks}
      onLogFileOpen={onLogFileOpenHandler}
    />
  );
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
