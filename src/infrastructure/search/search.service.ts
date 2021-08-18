import { SearchAdapter } from '@adapters/search.adapter'
import { Entity } from '@core/common/domain/base.entity'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'

export class SearchService implements SearchAdapter {
  public sequentialSpecificationSearch<E extends Entity<any, any>, O extends ValueObject<any>>(
    list: E[],
    key: string,
    specification: (o: O) => boolean,
  ): number {
    return list.findIndex((entity) => specification(entity[key]))
  }
}
