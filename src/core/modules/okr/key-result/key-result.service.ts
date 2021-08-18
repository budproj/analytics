import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { DateWindow } from '@core/common/domain/value-objects/date-window.value-object'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'
import { SearchPorts } from '@core/common/ports/search.ports'
import { SortingPorts } from '@core/common/ports/sorting.ports'

import { KeyResultProgressRecord } from './entities/progress-record.entity'
import { KeyResultProgressRecordRepository } from './repositories/progress-record.repository'

export class KeyResultService {
  private readonly sortingPorts = new SortingPorts()
  private readonly searchPorts = new SearchPorts()
  private readonly repositories: {
    progressRecord: KeyResultProgressRecordRepository
  }

  public constructor(persistenceAdapter: PersistenceAdapter) {
    this.repositories = {
      progressRecord: new KeyResultProgressRecordRepository(persistenceAdapter),
    }
  }

  public async getProgressHistoryForKeyResultID(
    id: ID,
    startDate?: DateVO,
  ): Promise<KeyResultProgressRecord[]> {
    startDate ??= new DateVO()

    const results = await this.repositories.progressRecord.getAllFromKeyResultID(id)
    const sortedResults = this.sortingPorts.insertionSort(results)
    const sliceIndex = this.searchPorts.sequentialSpecificationSearch(
      sortedResults,
      'date',
      (t: any) => startDate.isLesserThan(t),
      // TODO: Create a specification class and move it there to avoid losing the this reference
    )

    console.log(sliceIndex)

    return sortedResults
  }

  public groupProgressHistoryToBuckets(
    unsortedProgressHistory: KeyResultProgressRecord[],
    dateWindow: DateWindow,
  ): KeyResultProgressRecord[] {
    const sortedProgressHistory = this.sortingPorts.insertionSort(unsortedProgressHistory)
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
