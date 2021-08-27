import { CheckInPrimitives } from '@core/modules/okr/key-result/primitives/check-in.primitives'

import { ORMEntityInterface } from './base.interface'

export interface KeyResultCheckInORMEntityInterface extends ORMEntityInterface, CheckInPrimitives {
  keyResultId: string
}
