import { max, min } from 'lodash'

import { Specification } from '@core/common/domain/specifications/base.specification'

import { TypeCategory } from '../enums/type-category.enum'
import { Threshold } from '../value-objects/threshold.value-object'

export class IsThresholdBeforeSpecification extends Specification<Threshold> {
  protected readonly currentRevision = this.rev20210824IsLesserThanSensitiveToType
  private readonly comparissonFunctionHashmap: Record<TypeCategory, (numbers: number[]) => number> =
    {
      [TypeCategory.ASCENDING]: min,
      [TypeCategory.DESCENDING]: max,
    }

  public constructor(private readonly current: Threshold) {
    super()
  }

  protected rev20210824IsLesserThanSensitiveToType(candidate: Threshold): boolean {
    const comparissonFunction = this.comparissonFunctionHashmap[this.current.type.value]
    const target = comparissonFunction([this.current.value, candidate.value])

    return target === this.current.value
  }
}
