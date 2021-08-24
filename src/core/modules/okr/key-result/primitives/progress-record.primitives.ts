import { EntityPrimitives } from '@core/common/domain/interfaces/entity-object.interface'

export interface KeyResultProgressRecordPrimitives extends EntityPrimitives {
  progress: number
  keyResultId: string
  keyResultCheckInId: string
  date: Date
}
