import { ID } from 'src/core/common/value-objects/id.value-object'
import { KeyResultProgressRecordObject } from 'src/core/modules/okr/key-result/progress-record/progress-record.object'

import { PrimaryPort } from './primary.port'

export class GetKeyResultProgressHistory extends PrimaryPort<KeyResultProgressRecordObject[]> {
  public async execute(
    request: Partial<KeyResultProgressRecordObject>,
  ): Promise<KeyResultProgressRecordObject[]> {
    const keyResultID = new ID(request.keyResultId)
    const history = await this.core.okr.keyResult.getProgressHistoryForKeyResultID(keyResultID)

    return history.map((entity) => entity.toObject())
  }
}
