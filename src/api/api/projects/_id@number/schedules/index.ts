/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query?: {
      workflow?: string
      last_id?: number
    }

    status: 200
    resBody: Types.RestScheduleCollection
  }
}
