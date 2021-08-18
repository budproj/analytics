import { Entity } from '@core/common/domain/base.entity'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'

export interface SearchAdapter {
  sequentialSpecificationSearch<E extends Entity<any, any>, O extends ValueObject<any>>(
    list: E[],
    key: string,
    specification: (vo: O) => boolean,
  ): number
}
