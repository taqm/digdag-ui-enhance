/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './_id@number/userinfo'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/admin/attempts'
  const PATH1 = '/userinfo'
  const GET = 'GET'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        userinfo: {
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
