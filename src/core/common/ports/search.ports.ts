import { SearchAdapter } from '@adapters/search.adapter'
import { SearchService } from '@infrastructure/search/search.service'

import { Entity } from '../domain/base.entity'
import { Specification } from '../domain/specifications/base.specification'

export class SearchPorts {
  private readonly adapter: SearchAdapter

  public constructor(adapter?: SearchAdapter) {
    this.adapter = adapter ?? new SearchService()
  }

  public sequentialSpecificationSearch<E extends Entity<any, any>>(
    entities: E[],
    key: string,
    specification: Specification<any>,
  ): number {
    return this.adapter.sequentialSpecificationSearch(entities, key, specification)
  }
}
