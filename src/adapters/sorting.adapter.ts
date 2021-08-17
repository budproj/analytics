import { Entity } from '@core/common/domain/base.entity'

export interface SortingAdapter {
  insertionSort<E extends Entity<any, any>>(array: E[], sortingKey?: string): E[]
}
