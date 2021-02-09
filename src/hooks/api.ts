import * as React from 'react';

const PageSize = 100;

export const useGetAllData = <T extends { id: number }>(
  get: (pageSize: number, lastId?: number) => Promise<T[]>,
  enable = true,
): ApiResponse<T[]> => {
  const [response, setResponse] = React.useState<ApiResponse<T[]>>({});

  React.useEffect(() => {
    if (!enable) return;

    const f = async (): Promise<T[]> => {
      const result: T[] = [];

      while (true) {
        const lastId = result[result.length - 1]?.id;
        const ret = await get(PageSize, lastId);
        result.push(...ret);
        if (ret.length < PageSize) {
          break;
        }
      }
      return result;
    };

    f()
      .then((result) => setResponse({ data: result }))
      .catch((err) => setResponse({ error: err }));
  }, [enable]);

  return response;
};
