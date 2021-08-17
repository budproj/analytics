import { SortingAdapter } from '@adapters/sorting.adapter'
import { SortingService } from '@infrastructure/sorting/sorting.service'

import { Entity } from '../domain/base.entity'
import { SortingStrategy } from '../domain/enums/sorting-strategy.enum'
import { EntityPrimitives } from '../domain/interfaces/entity-object.interface'
import { EntityProperties } from '../domain/interfaces/entity-properties.interface'

export class SortingPorts<T extends EntityProperties, O extends EntityPrimitives> {
  private readonly adapter: SortingAdapter<T>
  private readonly strategyHashmap: Record<SortingStrategy, keyof SortingAdapter<T>> = {
    [SortingStrategy.INSERTION_SORT]: 'insertionSort',
  }

  private readonly strategyMethod: keyof SortingAdapter<T>

  public constructor(private readonly strategy: SortingStrategy, adapter?: SortingAdapter<T>) {
    this.adapter = adapter ?? new SortingService<T>()
    this.strategyMethod = this.strategyHashmap[this.strategy]
  }

  public sort(entities: Array<Entity<T, O>>): Array<Entity<T, O>> {
    const sortingMethod = this.adapter[this.strategyMethod]

    return sortingMethod(entities)
  }
}
