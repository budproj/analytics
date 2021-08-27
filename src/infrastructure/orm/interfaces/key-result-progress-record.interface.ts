import { ProgressRecordPrimitives } from '@core/modules/okr/key-result/primitives/progress-record.primitives'

import { ORMEntityInterface } from './base.interface'

export interface KeyResultProgressRecordORMEntityInterface
  extends ORMEntityInterface,
    ProgressRecordPrimitives {
  progress: number
  date: Date
  keyResultId: string
  keyResultCheckInId: string
}
