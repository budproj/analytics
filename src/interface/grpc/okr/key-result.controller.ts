import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { ProgressHistoryRequest } from './requests/key-result.request'
import { ProgressHistoryResponse } from './responses/key-result.response'

@Controller()
export class KeyResultController {
  @GrpcMethod('KeyResultService')
  protected async getProgressHistory(
    request: ProgressHistoryRequest,
  ): Promise<ProgressHistoryResponse> {
    console.log(request)

    return {
      history: [],
    }
  }
}
