import { Entity } from '@core/common/domain/base.entity'
import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'

export interface SortingAdapter<T extends EntityProperties> {
  insertionSort(array: Array<Entity<T, any>>, sortingKey?: keyof T): Array<Entity<T, any>>
}
