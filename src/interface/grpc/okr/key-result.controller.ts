import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { KeyResultPorts } from '@core/modules/okr/ports/key-result.ports'
import { ORMProvider } from '@infrastructure/orm/orm.provider'
import { KeyResultProgressRecordPrimitives } from '@modules/okr/key-result/primitives/progress-record.primitives'

import { GRPCService } from '../grpc.service'

import { ProgressHistoryRequest } from './requests/key-result.request'
import { ProgressHistoryResponse } from './responses/key-result.response'

@Controller()
export class KeyResultController {
  private readonly keyResultPorts: KeyResultPorts
  private readonly controllerAdapter = new GRPCService()

  public constructor(persistenceAdapter: ORMProvider) {
    this.keyResultPorts = new KeyResultPorts(persistenceAdapter)
  }

  @GrpcMethod('KeyResultService')
  protected async getProgressHistory(
    request: ProgressHistoryRequest,
  ): Promise<ProgressHistoryResponse> {
    const result = await this.keyResultPorts.getProgressHistoryForKeyResultID(request.keyResultId)

    return this.controllerAdapter.marshalResponse<KeyResultProgressRecordPrimitives[]>(result)
  }
}
