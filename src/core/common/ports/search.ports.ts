import { SearchAdapter } from '@adapters/search.adapter'
import { SearchService } from '@infrastructure/search/search.service'

import { Entity } from '../domain/base.entity'
import { ValueObject } from '../domain/value-objects/base.value-object'

export class SearchPorts {
  private readonly adapter: SearchAdapter
  private readonly method: keyof SearchAdapter

  public constructor(adapter?: SearchAdapter) {
    this.adapter = adapter ?? new SearchService()
  }

  public sequentialSpecificationSearch<E extends Entity<any, any>, O extends ValueObject<any>>(
    entities: E[],
    key: string,
    specification: (vo: O) => boolean,
  ): number {
    return this.adapter.sequentialSpecificationSearch(entities, key, specification)
  }
}
