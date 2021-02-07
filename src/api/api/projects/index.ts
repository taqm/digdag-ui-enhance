/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      name?: string
    }

    status: 200
    resBody: Types.RestProjectCollection
  }

  put: {
    reqHeaders?: {
      'Content-Length'?: number
    }

    query?: {
      project: string
      revision: string
      schedule_from?: string
    }

    status: 200
    resBody: Types.RestProject
    reqBody: Types.InputStream
  }
}
