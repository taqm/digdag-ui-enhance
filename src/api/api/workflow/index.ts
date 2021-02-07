/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      project?: string
      revision?: string
      name?: string
    }

    status: 200
    resBody: Types.RestWorkflowDefinition

    resHeaders: {
    }
  }
}
