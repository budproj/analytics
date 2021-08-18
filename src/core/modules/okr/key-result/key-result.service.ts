import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { DateWindow } from '@core/common/domain/value-objects/date-window.value-object'
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

  public groupProgressHistoryToBuckets(
    unsortedProgressHistory: KeyResultProgressRecord[],
    dateWindow: DateWindow,
  ): KeyResultProgressRecord[] {
    const sortedProgressHistory = this.sortingPorts.sort(unsortedProgressHistory)
    const buckets = [...sortedProgressHistory]

    for (let index = sortedProgressHistory.length - 1; index > 0; index--) {
      const current = sortedProgressHistory[index]
      const previous = sortedProgressHistory[index - 1]

      const isInSameDateWindow = dateWindow.isInSameDateWindow(current.date, previous.date)

      if (isInSameDateWindow) {
        buckets.splice(index - 1, 1)
      }
    }

    return buckets
  }
}
