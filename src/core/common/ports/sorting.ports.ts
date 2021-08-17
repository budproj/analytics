import { SortingAdapter } from '@adapters/sorting.adapter'
import { SortingService } from '@infrastructure/sorting/sorting.service'

import { Entity } from '../domain/base.entity'
import { SortingStrategy } from '../domain/enums/sorting-strategy.enum'

export class SortingPorts {
  static readonly strategyHashmap: Record<SortingStrategy, keyof SortingAdapter> = {
    [SortingStrategy.INSERTION_SORT]: 'insertionSort',
  }

  private readonly adapter: SortingAdapter
  private readonly method: keyof SortingAdapter

  public constructor(strategy?: SortingStrategy, adapter?: SortingAdapter) {
    strategy ??= SortingStrategy.INSERTION_SORT

    this.adapter = adapter ?? new SortingService()
    this.method = SortingPorts.strategyHashmap[strategy]
  }

  public sort<E extends Entity<any, any>>(entities: E[]): E[] {
    const sortingMethod = this.adapter[this.method]

    return sortingMethod<E>(entities)
  }
}
