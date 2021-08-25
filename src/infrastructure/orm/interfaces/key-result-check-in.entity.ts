import { KeyResultCheckInPrimitives } from '@core/modules/okr/key-result/primitives/key-result-check-in.primitives'

import { ORMEntityInterface } from './base.interface'

export interface KeyResultCheckInORMEntityInterface
  extends ORMEntityInterface,
    KeyResultCheckInPrimitives {
  keyResultId: string
}
