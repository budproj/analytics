import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { DateWindowCategory } from '@core/common/domain/enums/date-window-category.enum'
import { FormatCategory } from '@core/modules/okr/key-result/enums/format-category.enum'
import { KeyResultPorts } from '@core/modules/okr/ports/key-result.ports'
import { ORMProvider } from '@infrastructure/orm/orm.provider'

import { GRPCService } from '../grpc.service'

import { CalculateProgressRequest, ProgressHistoryRequest } from './requests/key-result.request'
import { CalculateProgressResponse, ProgressHistoryResponse } from './responses/key-result.response'

@Controller()
export class KeyResultController {
  static readonly dateWindowCategoryHashmap: Record<number, DateWindowCategory> = {
    0: DateWindowCategory.DAY,
    1: DateWindowCategory.WEEK,
  }

  static readonly formatCategoryHashmap: Record<number, FormatCategory> = {
    0: FormatCategory.NUMBER,
    1: FormatCategory.PERCENTAGE,
    2: FormatCategory.COIN_BRL,
    3: FormatCategory.COIN_USD,
  }

  private readonly keyResultPorts: KeyResultPorts
  private readonly controllerAdapter = new GRPCService()

  public constructor(persistenceAdapter: ORMProvider) {
    this.keyResultPorts = new KeyResultPorts(persistenceAdapter)
  }

  @GrpcMethod('KeyResultService')
  protected async getProgressHistory(
    request: ProgressHistoryRequest,
  ): Promise<ProgressHistoryResponse> {
    const window: DateWindowCategory = KeyResultController.dateWindowCategoryHashmap[request.window]
    const startDate = new Date(request.startDate ?? Date.now())

    const result = await this.keyResultPorts.getProgressHistoryForKeyResultID(request.keyResultId, {
      window,
      startDate,
    })

    return this.controllerAdapter.marshalResponse(result)
  }

  @GrpcMethod('KeyResultService')
  protected async calculateProgress(
    request: CalculateProgressRequest,
  ): Promise<CalculateProgressResponse> {
    const format: FormatCategory =
      KeyResultController.formatCategoryHashmap[request.keyResultData.format]
    const result = { progress: 0 }

    return this.controllerAdapter.marshalResponse(result)
  }
}
