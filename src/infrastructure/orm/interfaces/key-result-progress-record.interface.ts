import { KeyResultProgressRecordPrimitives } from '@core/modules/okr/key-result/primitives/progress-record.primitives'

import { ORMEntityInterface } from './base.interface'

export interface KeyResultProgressRecordORMEntityInterface
  extends ORMEntityInterface,
    KeyResultProgressRecordPrimitives {
  progress: number
  date: Date
  keyResultId: string
  keyResultCheckInId: string
}
