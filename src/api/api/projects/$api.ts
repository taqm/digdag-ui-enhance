/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_id@number'
import { Methods as Methods2 } from './_id@number/archive'
import { Methods as Methods3 } from './_id@number/revisions'
import { Methods as Methods4 } from './_id@number/schedules'
import { Methods as Methods5 } from './_id@number/secrets'
import { Methods as Methods6 } from './_id@number/secrets/_key@string'
import { Methods as Methods7 } from './_id@number/sessions'
import { Methods as Methods8 } from './_id@number/workflow'
import { Methods as Methods9 } from './_id@number/workflows'
import { Methods as Methods10 } from './_id@number/workflows/_name@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/projects'
  const PATH1 = '/archive'
  const PATH2 = '/revisions'
  const PATH3 = '/schedules'
  const PATH4 = '/secrets'
  const PATH5 = '/sessions'
  const PATH6 = '/workflow'
  const PATH7 = '/workflows'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        archive: {
          get: (option: { query: Methods2['get']['query'], config?: T }) =>
            fetch(prefix, `${prefix0}${PATH1}`, GET, option).send(),
          $get: (option: { query: Methods2['get']['query'], config?: T }) =>
            fetch(prefix, `${prefix0}${PATH1}`, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        revisions: {
          get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        schedules: {
          get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        secrets: {
          _key: (val2: string) => {
            const prefix2 = `${prefix0}${PATH4}/${val2}`

            return {
              put: (option: { body: Methods6['put']['reqBody'], config?: T }) =>
                fetch(prefix, prefix2, PUT, option).send(),
              $put: (option: { body: Methods6['put']['reqBody'], config?: T }) =>
                fetch(prefix, prefix2, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T }) =>
                fetch(prefix, prefix2, DELETE, option).send(),
              $delete: (option?: { config?: T }) =>
                fetch(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          get: (option?: { config?: T }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH4}`
        },
        sessions: {
          get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix0}${PATH5}`, GET, option).json(),
          $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix0}${PATH5}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
            `${prefix}${prefix0}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        workflow: {
          get: (option?: { query?: Methods8['get']['query'], config?: T }) =>
            fetch<Methods8['get']['resBody'], Methods8['get']['resHeaders'], Methods8['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json(),
          $get: (option?: { query?: Methods8['get']['query'], config?: T }) =>
            fetch<Methods8['get']['resBody'], Methods8['get']['resHeaders'], Methods8['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods8['get']['query'] }) =>
            `${prefix}${prefix0}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        workflows: {
          _name: (val2: string) => {
            const prefix2 = `${prefix0}${PATH7}/${val2}`

            return {
              get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
                fetch<Methods10['get']['resBody'], Methods10['get']['resHeaders'], Methods10['get']['status']>(prefix, prefix2, GET, option).json(),
              $get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
                fetch<Methods10['get']['resBody'], Methods10['get']['resHeaders'], Methods10['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods10['get']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          get: (option?: { query?: Methods9['get']['query'], config?: T }) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json(),
          $get: (option?: { query?: Methods9['get']['query'], config?: T }) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods9['get']['query'] }) =>
            `${prefix}${prefix0}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        delete: (option?: { config?: T }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        $delete: (option?: { config?: T }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    put: (option: { body: Methods0['put']['reqBody'], query?: Methods0['put']['query'], headers?: Methods0['put']['reqHeaders'], config?: T }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).json(),
    $put: (option: { body: Methods0['put']['reqBody'], query?: Methods0['put']['query'], headers?: Methods0['put']['reqHeaders'], config?: T }) =>
      fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'put'; query: Methods0['put']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
