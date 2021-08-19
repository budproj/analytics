import { SearchAdapter } from '@adapters/search.adapter'
import { Entity } from '@core/common/domain/base.entity'
import { Specification } from '@core/common/domain/specifications/base.specification'

export class SearchService implements SearchAdapter {
  public sequentialSpecificationSearch<E extends Entity<any, any>>(
    list: E[],
    key: string,
    specification: Specification<any>,
  ): number {
    return list.findIndex((entity) => specification.isSatisfiedBy(entity[key]))
  }
}
