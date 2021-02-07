/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './admin/attempts/_id@number/userinfo'
import { Methods as Methods1 } from './attempts'
import { Methods as Methods2 } from './attempts/_id@number'
import { Methods as Methods3 } from './attempts/_id@number/retries'
import { Methods as Methods4 } from './attempts/_id@number/tasks'
import { Methods as Methods5 } from './logs/_attempt_id@number/files'
import { Methods as Methods6 } from './logs/_attempt_id@number/files/_file_name@string'
import { Methods as Methods7 } from './logs/_attempt_id@number/upload_handle'
import { Methods as Methods8 } from './project'
import { Methods as Methods9 } from './projects'
import { Methods as Methods10 } from './projects/_id@number'
import { Methods as Methods11 } from './projects/_id@number/archive'
import { Methods as Methods12 } from './projects/_id@number/revisions'
import { Methods as Methods13 } from './projects/_id@number/schedules'
import { Methods as Methods14 } from './projects/_id@number/secrets'
import { Methods as Methods15 } from './projects/_id@number/secrets/_key@string'
import { Methods as Methods16 } from './projects/_id@number/sessions'
import { Methods as Methods17 } from './projects/_id@number/workflow'
import { Methods as Methods18 } from './projects/_id@number/workflows'
import { Methods as Methods19 } from './projects/_id@number/workflows/_name@string'
import { Methods as Methods20 } from './schedules'
import { Methods as Methods21 } from './schedules/_id@number'
import { Methods as Methods22 } from './schedules/_id@number/backfill'
import { Methods as Methods23 } from './schedules/_id@number/disable'
import { Methods as Methods24 } from './schedules/_id@number/enable'
import { Methods as Methods25 } from './schedules/_id@number/skip'
import { Methods as Methods26 } from './sessions'
import { Methods as Methods27 } from './sessions/_id@number'
import { Methods as Methods28 } from './sessions/_id@number/attempts'
import { Methods as Methods29 } from './version'
import { Methods as Methods30 } from './version/check'
import { Methods as Methods31 } from './workflow'
import { Methods as Methods32 } from './workflows'
import { Methods as Methods33 } from './workflows/_id@number'
import { Methods as Methods34 } from './workflows/_id@number/truncated_session_time'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/admin/attempts'
  const PATH1 = '/userinfo'
  const PATH2 = '/api/attempts'
  const PATH3 = '/retries'
  const PATH4 = '/tasks'
  const PATH5 = '/api/logs'
  const PATH6 = '/files'
  const PATH7 = '/upload_handle'
  const PATH8 = '/api/project'
  const PATH9 = '/api/projects'
  const PATH10 = '/archive'
  const PATH11 = '/revisions'
  const PATH12 = '/schedules'
  const PATH13 = '/secrets'
  const PATH14 = '/sessions'
  const PATH15 = '/workflow'
  const PATH16 = '/workflows'
  const PATH17 = '/api/schedules'
  const PATH18 = '/backfill'
  const PATH19 = '/disable'
  const PATH20 = '/enable'
  const PATH21 = '/skip'
  const PATH22 = '/api/sessions'
  const PATH23 = '/attempts'
  const PATH24 = '/api/version'
  const PATH25 = '/api/version/check'
  const PATH26 = '/api/workflow'
  const PATH27 = '/api/workflows'
  const PATH28 = '/truncated_session_time'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    admin: {
      attempts: {
        _id: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            userinfo: {
              get: (option?: { config?: T }) =>
                fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH1}`
            }
          }
        }
      }
    },
    attempts: {
      _id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          retries: {
            get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          tasks: {
            get: (option?: { config?: T }) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`
          },
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
        fetch(prefix, PATH2, PUT, option).send(),
      $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
        fetch(prefix, PATH2, PUT, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    logs: {
      _attempt_id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          files: {
            _file_name: (val3: string) => {
              const prefix3 = `${prefix1}${PATH6}/${val3}`

              return {
                get: (option?: { config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).send(),
                $get: (option?: { config?: T }) =>
                  fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
            $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json().then(r => r.body),
            put: (option: { body: Methods5['put']['reqBody'], query?: Methods5['put']['query'], config?: T }) =>
              fetch<Methods5['put']['resBody'], Methods5['put']['resHeaders'], Methods5['put']['status']>(prefix, `${prefix1}${PATH6}`, PUT, option).json(),
            $put: (option: { body: Methods5['put']['reqBody'], query?: Methods5['put']['query'], config?: T }) =>
              fetch<Methods5['put']['resBody'], Methods5['put']['resHeaders'], Methods5['put']['status']>(prefix, `${prefix1}${PATH6}`, PUT, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] } | { method: 'put'; query: Methods5['put']['query'] }) =>
              `${prefix}${prefix1}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          upload_handle: {
            get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
              fetch<Methods7['get']['resBody'], Methods7['get']['resHeaders'], Methods7['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
              fetch<Methods7['get']['resBody'], Methods7['get']['resHeaders'], Methods7['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
              `${prefix}${prefix1}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    project: {
      get: (option?: { query?: Methods8['get']['query'], config?: T }) =>
        fetch<Methods8['get']['resBody'], Methods8['get']['resHeaders'], Methods8['get']['status']>(prefix, PATH8, GET, option).json(),
      $get: (option?: { query?: Methods8['get']['query'], config?: T }) =>
        fetch<Methods8['get']['resBody'], Methods8['get']['resHeaders'], Methods8['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods8['get']['query'] }) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    projects: {
      _id: (val1: number) => {
        const prefix1 = `${PATH9}/${val1}`

        return {
          archive: {
            get: (option: { query: Methods11['get']['query'], config?: T }) =>
              fetch(prefix, `${prefix1}${PATH10}`, GET, option).send(),
            $get: (option: { query: Methods11['get']['query'], config?: T }) =>
              fetch(prefix, `${prefix1}${PATH10}`, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods11['get']['query'] }) =>
              `${prefix}${prefix1}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          revisions: {
            get: (option?: { query?: Methods12['get']['query'], config?: T }) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json(),
            $get: (option?: { query?: Methods12['get']['query'], config?: T }) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix1}${PATH11}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods12['get']['query'] }) =>
              `${prefix}${prefix1}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          schedules: {
            get: (option?: { query?: Methods13['get']['query'], config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json(),
            $get: (option?: { query?: Methods13['get']['query'], config?: T }) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods13['get']['query'] }) =>
              `${prefix}${prefix1}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          secrets: {
            _key: (val3: string) => {
              const prefix3 = `${prefix1}${PATH13}/${val3}`

              return {
                put: (option: { body: Methods15['put']['reqBody'], config?: T }) =>
                  fetch(prefix, prefix3, PUT, option).send(),
                $put: (option: { body: Methods15['put']['reqBody'], config?: T }) =>
                  fetch(prefix, prefix3, PUT, option).send().then(r => r.body),
                delete: (option?: { config?: T }) =>
                  fetch(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T }) =>
                  fetch(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            get: (option?: { config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH13}`
          },
          sessions: {
            get: (option?: { query?: Methods16['get']['query'], config?: T }) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH14}`, GET, option).json(),
            $get: (option?: { query?: Methods16['get']['query'], config?: T }) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH14}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods16['get']['query'] }) =>
              `${prefix}${prefix1}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          workflow: {
            get: (option?: { query?: Methods17['get']['query'], config?: T }) =>
              fetch<Methods17['get']['resBody'], Methods17['get']['resHeaders'], Methods17['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json(),
            $get: (option?: { query?: Methods17['get']['query'], config?: T }) =>
              fetch<Methods17['get']['resBody'], Methods17['get']['resHeaders'], Methods17['get']['status']>(prefix, `${prefix1}${PATH15}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods17['get']['query'] }) =>
              `${prefix}${prefix1}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          workflows: {
            _name: (val3: string) => {
              const prefix3 = `${prefix1}${PATH16}/${val3}`

              return {
                get: (option?: { query?: Methods19['get']['query'], config?: T }) =>
                  fetch<Methods19['get']['resBody'], Methods19['get']['resHeaders'], Methods19['get']['status']>(prefix, prefix3, GET, option).json(),
                $get: (option?: { query?: Methods19['get']['query'], config?: T }) =>
                  fetch<Methods19['get']['resBody'], Methods19['get']['resHeaders'], Methods19['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods19['get']['query'] }) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            get: (option?: { query?: Methods18['get']['query'], config?: T }) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json(),
            $get: (option?: { query?: Methods18['get']['query'], config?: T }) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods18['get']['query'] }) =>
              `${prefix}${prefix1}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { config?: T }) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          delete: (option?: { config?: T }) =>
            fetch<Methods10['delete']['resBody'], BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          $delete: (option?: { config?: T }) =>
            fetch<Methods10['delete']['resBody'], BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods9['get']['query'], config?: T }) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json(),
      $get: (option?: { query?: Methods9['get']['query'], config?: T }) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      put: (option: { body: Methods9['put']['reqBody'], query?: Methods9['put']['query'], headers?: Methods9['put']['reqHeaders'], config?: T }) =>
        fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, PATH9, PUT, option).json(),
      $put: (option: { body: Methods9['put']['reqBody'], query?: Methods9['put']['query'], headers?: Methods9['put']['reqHeaders'], config?: T }) =>
        fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, PATH9, PUT, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods9['get']['query'] } | { method: 'put'; query: Methods9['put']['query'] }) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    schedules: {
      _id: (val1: number) => {
        const prefix1 = `${PATH17}/${val1}`

        return {
          backfill: {
            post: (option: { body: Methods22['post']['reqBody'], config?: T }) =>
              fetch<Methods22['post']['resBody'], BasicHeaders, Methods22['post']['status']>(prefix, `${prefix1}${PATH18}`, POST, option).json(),
            $post: (option: { body: Methods22['post']['reqBody'], config?: T }) =>
              fetch<Methods22['post']['resBody'], BasicHeaders, Methods22['post']['status']>(prefix, `${prefix1}${PATH18}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH18}`
          },
          disable: {
            post: (option?: { config?: T }) =>
              fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, `${prefix1}${PATH19}`, POST, option).json(),
            $post: (option?: { config?: T }) =>
              fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, `${prefix1}${PATH19}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH19}`
          },
          enable: {
            post: (option?: { config?: T }) =>
              fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, `${prefix1}${PATH20}`, POST, option).json(),
            $post: (option?: { config?: T }) =>
              fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, `${prefix1}${PATH20}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH20}`
          },
          skip: {
            post: (option: { body: Methods25['post']['reqBody'], config?: T }) =>
              fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, `${prefix1}${PATH21}`, POST, option).json(),
            $post: (option: { body: Methods25['post']['reqBody'], config?: T }) =>
              fetch<Methods25['post']['resBody'], BasicHeaders, Methods25['post']['status']>(prefix, `${prefix1}${PATH21}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH21}`
          },
          get: (option?: { config?: T }) =>
            fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods20['get']['query'], config?: T }) =>
        fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH17, GET, option).json(),
      $get: (option?: { query?: Methods20['get']['query'], config?: T }) =>
        fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods20['get']['query'] }) =>
        `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    sessions: {
      _id: (val1: number) => {
        const prefix1 = `${PATH22}/${val1}`

        return {
          attempts: {
            get: (option?: { query?: Methods28['get']['query'], config?: T }) =>
              fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json(),
            $get: (option?: { query?: Methods28['get']['query'], config?: T }) =>
              fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, `${prefix1}${PATH23}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods28['get']['query'] }) =>
              `${prefix}${prefix1}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { config?: T }) =>
            fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods26['get']['query'], config?: T }) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH22, GET, option).json(),
      $get: (option?: { query?: Methods26['get']['query'], config?: T }) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods26['get']['query'] }) =>
        `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    version: {
      check: {
        get: (option: { query: Methods30['get']['query'], config?: T }) =>
          fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH25, GET, option).json(),
        $get: (option: { query: Methods30['get']['query'], config?: T }) =>
          fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods30['get']['query'] }) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      get: (option?: { config?: T }) =>
        fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH24, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH24}`
    },
    workflow: {
      get: (option?: { query?: Methods31['get']['query'], config?: T }) =>
        fetch<Methods31['get']['resBody'], Methods31['get']['resHeaders'], Methods31['get']['status']>(prefix, PATH26, GET, option).json(),
      $get: (option?: { query?: Methods31['get']['query'], config?: T }) =>
        fetch<Methods31['get']['resBody'], Methods31['get']['resHeaders'], Methods31['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods31['get']['query'] }) =>
        `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    workflows: {
      _id: (val1: number) => {
        const prefix1 = `${PATH27}/${val1}`

        return {
          truncated_session_time: {
            get: (option?: { query?: Methods34['get']['query'], config?: T }) =>
              fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, `${prefix1}${PATH28}`, GET, option).json(),
            $get: (option?: { query?: Methods34['get']['query'], config?: T }) =>
              fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, `${prefix1}${PATH28}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods34['get']['query'] }) =>
              `${prefix}${prefix1}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option?: { config?: T }) =>
            fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods32['get']['query'], config?: T }) =>
        fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, PATH27, GET, option).json(),
      $get: (option?: { query?: Methods32['get']['query'], config?: T }) =>
        fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods32['get']['query'] }) =>
        `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
