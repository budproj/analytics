import { ID } from '@core/common/domain/value-objects/id.value-object'

import { KeyResultService } from '../key-result/key-result.service'
import { KeyResultProgressRecordPrimitives } from '../key-result/primitives/progress-record.primitives'

export class KeyResultPorts {
  private readonly keyResultService = new KeyResultService()

  public async getProgressHistoryForKeyResultID(
    primitiveID: string,
  ): Promise<KeyResultProgressRecordPrimitives[]> {
    const keyResultID = new ID(primitiveID)
    const history = await this.keyResultService.getProgressHistoryForKeyResultID(keyResultID)

    return history.map((entity) => entity.toObject())
  }
}
