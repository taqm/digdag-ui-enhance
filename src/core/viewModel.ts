import dayjs from 'dayjs';
import { responseInterface } from 'swr';

import {
  Attempt,
  RestProject,
  RestSession,
  RestSessionAttempt,
  RestTask,
  RestWorkflowDefinition,
} from '../api/@types';
import {
  View$AttemptStatus,
  View$Project,
  View$Session,
  View$SessionAttempt,
  View$Task,
  View$Workflow,
} from '../types/viewModel';

export const toApiResponse = <R1, R2>(
  res: responseInterface<R1, any>,
  fn: (data: R1) => R2,
): ApiResponse<R2> => ({
  error: res.error,
  data: res.data && fn(res.data),
});

export const toProject = (src: RestProject): View$Project => ({
  id: src.id,
  name: src.name,
  revision: src.revision,
});

export const toWorkflow = (src: RestWorkflowDefinition): View$Workflow => ({
  id: src.id,
  name: src.name,
  projectId: src.project.id,
  projectName: src.project.name,
  config: src.config,
});

export const toSession = (src: RestSession): View$Session => ({
  id: src.id,
  projectId: src.project.id,
  projectName: src.project.name,
  workflowId: src.workflow.id,
  workflowName: src.workflow.name,
  sessionTime: dayjs(String(src.sessionTime)),
  lastAttempt: {
    id: src.lastAttempt.id,
    createdAt: dayjs(src.lastAttempt.createdAt),
    finishedAt: src.lastAttempt.finishedAt
      ? dayjs(src.lastAttempt.finishedAt)
      : undefined,
    status: toAttemptStatus(src.lastAttempt),
  },
});

export const toSessionAttempt = (
  src: RestSessionAttempt,
): View$SessionAttempt => ({
  id: src.id,
  createdAt: dayjs(src.createdAt),
  finishedAt: src.finishedAt ? dayjs(src.finishedAt) : undefined,
  projectId: src.project.id,
  projectName: src.project.name,
  workflowId: src.workflow.id,
  workflowName: src.workflow.name,
  sessionId: src.sessionId,
  sessionTime: dayjs(String(src.sessionTime)),
  status: toAttemptStatus(src),
});

export const toTask = (src: RestTask): View$Task => ({
  id: src.id,
  parentId: src.parentId,
  fullName: src.fullName,
  startedAt: src.startedAt ? dayjs(src.startedAt) : undefined,
  updatedAt: src.updatedAt ? dayjs(src.updatedAt) : undefined,
  config: src.config,
  state: src.state,
  isGroup: src.group || (src as any).isGroup,
});

const toAttemptStatus = (attempt: Attempt): View$AttemptStatus => {
  if (!attempt.done) {
    return 'running';
  }

  if (attempt.success) {
    return 'success';
  }

  if (attempt.cancelRequested) {
    return 'killed';
  }

  return 'error';
};
