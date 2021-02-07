/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      last_id?: number
      count?: number
    }

    status: 200
    resBody: Types.RestWorkflowDefinitionCollection
  }
}
