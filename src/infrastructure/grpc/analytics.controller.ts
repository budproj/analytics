import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import {
  KeyResultProgressHistoryRequest,
  ProgressHistoryResponse,
} from '@analytics/interface/key-result.interface'
import { PortService } from '@analytics/ports/port.service'

@Controller('analytics')
export class AnalyticsController {
  private readonly analytics = new PortService('primary')

  @GrpcMethod('AnalyticsService')
  protected async getKeyResultProgressHistory(
    request: KeyResultProgressHistoryRequest,
  ): Promise<ProgressHistoryResponse> {
    return this.analytics.dispatch('get-key-result-progress-history', request)
  }
}
