import { EntityPrimitives } from '@core/common/domain/interfaces/entity-object.interface'

import { FormatCategory } from '../enums/format-category.enum'

export interface KeyResultPrimitives extends EntityPrimitives {
  initialValue: number
  goal: number
  format: FormatCategory
  progressHistory?: number[]
}
