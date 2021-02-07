/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query?: {
      name?: string
      revision?: string
    }

    status: 200
    resBody: Types.RestWorkflowDefinition

    resHeaders: {
    }
  }
}
