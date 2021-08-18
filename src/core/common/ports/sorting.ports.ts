import { SortingAdapter } from '@adapters/sorting.adapter'
import { SortingService } from '@infrastructure/sorting/sorting.service'

import { Entity } from '../domain/base.entity'

export class SortingPorts {
  private readonly adapter: SortingAdapter

  public constructor(adapter?: SortingAdapter) {
    this.adapter = adapter ?? new SortingService()
  }

  public insertionSort<E extends Entity<any, any>>(entities: E[]): E[] {
    return this.adapter.insertionSort(entities)
  }
}
