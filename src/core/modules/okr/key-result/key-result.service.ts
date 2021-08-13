import { ID } from 'src/core/common/value-objects/id.value-object'

import { KeyResultProgressRecord } from './progress-record/progress-record.entity'
import { KeyResultProgressRecordService } from './progress-record/progress-record.service'

export class KeyResultService {
  private readonly progressRecord: KeyResultProgressRecordService =
    new KeyResultProgressRecordService()

  public async getProgressHistoryForKeyResultID(id: ID): Promise<KeyResultProgressRecord[]> {
    const keyResultProgressRecords = this.progressRecord.repository.getAllFromKeyResultID(id)
    console.log(keyResultProgressRecords, id)

    return []
  }
}
