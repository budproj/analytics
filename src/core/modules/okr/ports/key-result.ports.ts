import { DateWindowCategory } from '@core/common/domain/enums/date-window-category.enum'
import { DateWindow } from '@core/common/domain/value-objects/date-window.value-object'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'
import { PrimaryPorts } from '@core/common/ports/primary.ports'

import { KeyResultService } from '../key-result/key-result.service'
import { KeyResultProgressRecordPrimitives } from '../key-result/primitives/progress-record.primitives'

export class KeyResultPorts extends PrimaryPorts {
  private readonly keyResultService: KeyResultService

  public constructor(persistenceAdapter) {
    super()
    this.keyResultService = new KeyResultService(persistenceAdapter)
  }

  public async getProgressHistoryForKeyResultID(
    primitiveID: string,
    options: {
      window?: DateWindowCategory
      startDate?: Date
    } = {},
  ): Promise<KeyResultProgressRecordPrimitives[]> {
    options.window ??= DateWindowCategory.DAY
    options.startDate ??= new Date()

    const keyResultID = new ID(primitiveID)
    const bucketWindow = new DateWindow(options.window)
    const startDate = new DateVO(options.startDate)

    const history = await this.keyResultService.getProgressHistoryForKeyResultID(
      keyResultID,
      startDate,
    )
    const historyBuckets = this.keyResultService.groupProgressHistoryToBuckets(
      history,
      bucketWindow,
    )

    return this.unmarshalEntityList(historyBuckets)
  }
}
