/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './_attempt_id@number/files'
import { Methods as Methods1 } from './_attempt_id@number/files/_file_name@string'
import { Methods as Methods2 } from './_attempt_id@number/upload_handle'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/logs'
  const PATH1 = '/files'
  const PATH2 = '/upload_handle'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    _attempt_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        files: {
          _file_name: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

            return {
              get: (option?: { config?: T }) =>
                fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).send(),
              $get: (option?: { config?: T }) =>
                fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          put: (option: { body: Methods0['put']['reqBody'], query?: Methods0['put']['query'], config?: T }) =>
            fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).json(),
          $put: (option: { body: Methods0['put']['reqBody'], query?: Methods0['put']['query'], config?: T }) =>
            fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'put'; query: Methods0['put']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        upload_handle: {
          get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
            fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
            fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
