/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      last_id?: number
      page_size?: number
    }

    status: 200
    resBody: Types.RestSessionCollection
  }
}
