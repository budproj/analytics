import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { PrimaryPorts } from 'src/core/ports/primary-ports.service'

import { KeyResultProgressHistoryRequest } from '../requests/key-result.request'
import { ProgressHistoryResponse } from '../responses/key-result.response'

@Controller('analytics')
export class AnalyticsController {
  private readonly ports = new PrimaryPorts()

  @GrpcMethod('AnalyticsService')
  protected async getKeyResultProgressHistory(
    request: KeyResultProgressHistoryRequest,
  ): Promise<ProgressHistoryResponse> {
    return this.ports.dispatch('get-key-result-progress-history', request)
  }
}
