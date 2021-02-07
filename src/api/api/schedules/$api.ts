/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_id@number'
import { Methods as Methods2 } from './_id@number/backfill'
import { Methods as Methods3 } from './_id@number/disable'
import { Methods as Methods4 } from './_id@number/enable'
import { Methods as Methods5 } from './_id@number/skip'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/schedules'
  const PATH1 = '/backfill'
  const PATH2 = '/disable'
  const PATH3 = '/enable'
  const PATH4 = '/skip'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        backfill: {
          post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        disable: {
          post: (option?: { config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          $post: (option?: { config?: T }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        enable: {
          post: (option?: { config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
          $post: (option?: { config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`
        },
        skip: {
          post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
          $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH4}`
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
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
