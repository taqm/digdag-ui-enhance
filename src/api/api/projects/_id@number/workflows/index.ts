/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query?: {
      revision: string
      name?: string
    }

    status: 200
    resBody: Types.RestWorkflowDefinitionCollection
  }
}
