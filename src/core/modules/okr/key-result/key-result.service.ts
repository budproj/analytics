import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { IsBeforeSpecification } from '@core/common/domain/specifications/is-before.specification'
import { DateWindow } from '@core/common/domain/value-objects/date-window.value-object'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'
import { SearchPorts } from '@core/common/ports/search.ports'
import { SortingPorts } from '@core/common/ports/sorting.ports'

import { KeyResultCheckIn } from './entities/key-result-check-in.entity'
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

    const isBeforeStartDateSpecification = new IsBeforeSpecification(startDate)
    const sliceIndex = this.searchPorts.sequentialSpecificationSearch(
      sortedResults,
      'date',
      isBeforeStartDateSpecification,
    )

    return sliceIndex ? sortedResults.slice(0, sliceIndex) : sortedResults
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

  public generateProgressRecordForCheckIn(
    checkIn: KeyResultCheckIn,
    keyResultID: ID,
  ): KeyResultProgressRecord {
    return {} as any
  }
}
