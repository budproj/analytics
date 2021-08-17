import { SortingAdapter } from '@adapters/sorting.adapter'
import { Entity } from '@core/common/domain/base.entity'
import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'

export class SortingService<T extends EntityProperties> implements SortingAdapter<T> {
  public insertionSort(entities: Array<Entity<T, any>>): Array<Entity<T, any>> {
    for (let outerIndex = 1; outerIndex < entities.length; outerIndex++) {
      let innerIndex = outerIndex - 1
      const key = entities[outerIndex]

      while (innerIndex >= 0 && entities[innerIndex].isGreaterThan(key)) {
        entities[innerIndex + 1] = entities[innerIndex]
        innerIndex--
      }
    }

    return entities
  }
}
