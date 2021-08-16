import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { KeyResultProgressRecordObject } from 'src/core/modules/okr/key-result/progress-record/progress-record.object'

import { KeyResultProgressHistoryRequest } from './requests/key-result.request'
import { ProgressHistoryResponse, ProgressRecord } from './responses/key-result.response'

@Controller('analytics')
export class AnalyticsController {
  private readonly ports = new PrimaryPorts()

  @GrpcMethod('AnalyticsService')
  protected async getKeyResultProgressHistory(
    request: KeyResultProgressHistoryRequest,
  ): Promise<ProgressHistoryResponse> {
    const history = await this.ports.dispatch<KeyResultProgressRecordObject[]>(
      'get-key-result-progress-history',
      request,
    )

    return {
      history: history.map((record) => this.marshalProgressRecord(record)),
    }
  }

  private marshalProgressRecord(record: KeyResultProgressRecordObject): ProgressRecord {
    return {
      id: record.id,
      progress: record.progress,
      timestamp: record.createdAt.getTime(),
    }
  }
}
