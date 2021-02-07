import { responseInterface } from 'swr';
import { RestProject } from '../api/@types';

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
