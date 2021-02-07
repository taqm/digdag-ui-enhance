import { Dayjs } from 'dayjs';

export type View$AttemptStatus = 'success' | 'error' | 'killed' | 'running';

export type View$Project = {
  id: number;
  name: string;
  revision: string;
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
  projectId: number;
  projectName: string;
  workflowId: number;
  workflowName: string;
  sessionId: number;
  status: 'success' | 'error' | 'killed' | 'running';
};
