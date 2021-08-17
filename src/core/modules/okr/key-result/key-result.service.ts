import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { ID } from '@core/common/domain/value-objects/id.value-object'
import { SortingPorts } from '@core/common/ports/sorting.ports'

import { KeyResultProgressRecord } from './entities/progress-record.entity'
import { KeyResultProgressRecordRepository } from './repositories/progress-record.repository'

export class KeyResultService {
  private readonly sortingPorts = new SortingPorts()
  private readonly repositories: {
    progressRecord: KeyResultProgressRecordRepository
  }

  public constructor(persistenceAdapter: PersistenceAdapter) {
    this.repositories = {
      progressRecord: new KeyResultProgressRecordRepository(persistenceAdapter),
    }
  }

  public async getProgressHistoryForKeyResultID(id: ID): Promise<KeyResultProgressRecord[]> {
    const results = await this.repositories.progressRecord.getAllFromKeyResultID(id)

    return this.sortingPorts.sort(results)
  }
}
