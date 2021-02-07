/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query?: {
      session_time: string
      mode?: 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY' | 'SCHEDULE' | 'NEXT_SCHEDULE'
    }

    status: 200
    resBody: Types.RestWorkflowSessionTime
  }
}
