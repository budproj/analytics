import { EntityPrimitives } from '@core/common/domain/interfaces/entity-object.interface'

import { TypeCategory } from '../enums/type-category.enum'

export interface KeyResultPrimitives extends EntityPrimitives {
  initialValue: number
  goal: number
  type: TypeCategory
  progressHistory?: number[]
}
