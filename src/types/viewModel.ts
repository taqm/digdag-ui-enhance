import { Dayjs } from 'dayjs';

export type View$AttemptStatus = 'success' | 'error' | 'killed' | 'running';

export type View$Project = {
  id: number;
  name: string;
  revision: string;
};

export type View$Workflow = {
  id: number;
  name: string;
  projectId: number;
  projectName: string;
  config: unknown; // 操作しない
};

export type View$Session = {
  id: number;
  projectId: number;
  projectName: string;
  workflowId: number;
  workflowName: string;
  sessionTime: Dayjs;
  lastAttempt: {
    id: number;
    createdAt: Dayjs;
    finishedAt?: Dayjs;
    status: View$AttemptStatus;
  };
};

export type View$SessionAttempt = {
  id: number;
  createdAt: Dayjs;
  finishedAt?: Dayjs;
  projectId: number;
  projectName: string;
  workflowId: number;
  workflowName: string;
  sessionId: number;
  sessionTime: Dayjs;
  status: 'success' | 'error' | 'killed' | 'running';
};

export type View$Task = {
  id: number;
  parentId: number;
  fullName: string;
  startedAt?: Dayjs;
  updatedAt?: Dayjs;
  config: unknown;
  state: string;
  isGroup: boolean;
};
