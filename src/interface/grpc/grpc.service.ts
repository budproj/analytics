import { ControllerAdapter } from '@adapters/controller.adapter'

import { Response } from './interfaces/response.interface'

export class GRPCService implements ControllerAdapter {
  public marshalResponse<T = unknown>(response: T): Response<T> {
    return {
      data: response,
    }
  }
}
