import { ID } from '@core/common/domain/value-objects/id.value-object'

import { KeyResultProgressRecord } from './entities/progress-record.entity'
import { KeyResultProgressRecordRepository } from './repositories/progress-record.repository'

export class KeyResultService {
  private readonly repositories = {
    progressRecord: new KeyResultProgressRecordRepository(),
  }

  public async getProgressHistoryForKeyResultID(id: ID): Promise<KeyResultProgressRecord[]> {
    return this.repositories.progressRecord.getAllFromKeyResultID(id)
  }
}
