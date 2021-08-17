import { SortingAdapter } from '@adapters/sorting.adapter'
import { Entity } from '@core/common/domain/base.entity'

export class SortingService implements SortingAdapter {
  public insertionSort<E extends Entity<any, any>>(entities: E[]): E[] {
    for (let outerIndex = 1; outerIndex < entities.length; outerIndex++) {
      const key = entities[outerIndex]

      let innerIndex = outerIndex - 1
      while (innerIndex >= 0 && entities[innerIndex].isGreaterThan(key)) {
        entities[innerIndex + 1] = entities[innerIndex]
        innerIndex--
      }

      entities[innerIndex + 1] = key
    }

    return entities
  }
}
