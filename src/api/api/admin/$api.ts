/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './attempts/_id@number/userinfo'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/admin/attempts'
  const PATH1 = '/userinfo'
  const GET = 'GET'

  return {
    attempts: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          userinfo: {
            get: (option?: { config?: T }) =>
              fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          }
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
