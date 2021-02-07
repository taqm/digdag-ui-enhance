/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query?: {
      task?: string
      file_time?: number
      node_id?: string
    }

    status: 200
    resBody: Types.DirectUploadHandle

    resHeaders: {
    }
  }
}
