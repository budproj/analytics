import { EntityPrimitives } from '@core/common/domain/interfaces/entity-object.interface'

export interface KeyResultPrimitives extends EntityPrimitives {
  initialValue: number
  goal: number
  progressHistory?: number[]
}
