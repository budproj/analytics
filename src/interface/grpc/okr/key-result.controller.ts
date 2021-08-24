import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { DateWindowCategory } from '@core/common/domain/enums/date-window-category.enum'
import { TypeCategory } from '@core/modules/okr/key-result/enums/type-category.enum'
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

  static readonly typeCategoryHashmap: Record<number, TypeCategory> = {
    0: TypeCategory.ASCENDING,
    1: TypeCategory.DESCENDING,
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
  protected calculateProgress(request: CalculateProgressRequest): CalculateProgressResponse {
    const initialValue: number = request.keyResultData.initialValue ?? 0
    const goal: number = request.keyResultData.goal ?? 0
    const type: TypeCategory = KeyResultController.typeCategoryHashmap[request.keyResultData.type]

    const progress = this.keyResultPorts.calculateProgressForPrimitiveKeyResultdata(request.value, {
      initialValue,
      goal,
      type,
    })

    return this.controllerAdapter.marshalResponse({
      progress,
    })
  }
}
