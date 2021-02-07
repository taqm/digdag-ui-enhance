/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query?: {
      task?: string
    }

    status: 200
    resBody: Types.RestLogFileHandleCollection
  }

  put: {
    query?: {
      task?: string
      file_time?: number
      node_id?: string
    }

    status: 200
    resBody: Types.RestLogFilePutResult

    resHeaders: {
    }

    reqBody: Types.InputStream
  }
}
