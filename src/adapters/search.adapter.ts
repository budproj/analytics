import { Entity } from '@core/common/domain/base.entity'
import { Specification } from '@core/common/domain/specifications/base.specification'

export interface SearchAdapter {
  sequentialSpecificationSearch<E extends Entity<any, any>>(
    list: E[],
    key: string,
    specification: Specification<any>,
  ): number
}
