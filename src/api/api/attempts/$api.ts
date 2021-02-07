/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_id@number'
import { Methods as Methods2 } from './_id@number/retries'
import { Methods as Methods3 } from './_id@number/tasks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/attempts'
  const PATH1 = '/retries'
  const PATH2 = '/tasks'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        retries: {
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        tasks: {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, PUT, option).send(),
    $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
      fetch(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
