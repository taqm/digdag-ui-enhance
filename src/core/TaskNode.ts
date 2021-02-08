import { Dayjs } from 'dayjs';
import { View$Task } from '../types/viewModel';

export type TaskNode = {
  id: number;
  name: string;
  fullName: string;
  startedAt?: Dayjs;
  updatedAt?: Dayjs;
  config: unknown;
  state: string;
  depth: number;
  descendantsCount: number;
} & (
  | {
      isGroup: true;
      nodes: TaskNode[];
    }
  | { isGroup: false }
);

export const genTaskTree = (tasks: View$Task[]): TaskNode => {
  if (tasks.length < 1) throw new Error('tasks is empty');

  const tmp = tasks.reduce((acc, cur) => {
    const parentId = cur.parentId;
    const wk = acc[parentId] ?? [];
    return { ...acc, [parentId]: [...wk, cur] };
  }, {} as Record<number, View$Task[]>);

  const f = (task: View$Task, depth: number, parentFullName = ''): TaskNode => {
    const draft: Omit<TaskNode, 'nodes' | 'descendantsCount' | 'isGroup'> = {
      id: task.id,
      name: task.fullName.replace(parentFullName, ''),
      fullName: task.fullName,
      startedAt: task.startedAt,
      updatedAt: task.updatedAt,
      config: task.config,
      state: task.state,
      depth,
    };

    const nodes = tmp[task.id]?.map((c) => f(c, depth + 1, task.fullName));
    if (!nodes) {
      return { ...draft, isGroup: false, descendantsCount: 0 };
    }
    const descendantsCount =
      nodes.reduce((acc, n) => acc + n.descendantsCount, 0) + nodes.length;
    return { ...draft, isGroup: true, nodes, descendantsCount };
  };
  const rootTask = tasks[0];
  return f(rootTask!, 0);
};
