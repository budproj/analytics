import { DateWindowCategory } from '@core/common/domain/enums/date-window-category.enum'
import { DateWindow } from '@core/common/domain/value-objects/date-window.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { KeyResultService } from '../key-result/key-result.service'
import { KeyResultProgressRecordPrimitives } from '../key-result/primitives/progress-record.primitives'

export class KeyResultPorts {
  private readonly keyResultService: KeyResultService

  public constructor(persistenceAdapter) {
    this.keyResultService = new KeyResultService(persistenceAdapter)
  }

  public async getProgressHistoryForKeyResultID(
    primitiveID: string,
    options: {
      window?: DateWindowCategory
    } = {},
  ): Promise<KeyResultProgressRecordPrimitives[]> {
    options.window ??= DateWindowCategory.DAY

    const keyResultID = new ID(primitiveID)
    const history = await this.keyResultService.getProgressHistoryForKeyResultID(keyResultID)

    const bucketWindow = new DateWindow(options.window)
    const historyBuckets = this.keyResultService.groupProgressHistoryToBuckets(
      history,
      bucketWindow,
    )

    return historyBuckets.map((entity) => entity.toObject())
  }
}
