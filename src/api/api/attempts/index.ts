/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      project?: string
      workflow?: string
      include_retried?: boolean
      last_id?: number
      page_size?: number
    }

    status: 200
    resBody: Types.RestSessionAttemptCollection
  }

  put: {
    reqBody: Types.RestSessionAttemptRequest
  }
}
