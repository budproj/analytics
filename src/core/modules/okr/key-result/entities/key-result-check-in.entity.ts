import { Entity } from '@core/common/domain/base.entity'

import { KeyResultCheckInPrimitives } from '../primitives/key-result-check-in.primitives'
import { KeyResultCheckInProperties } from '../properties/key-result-check-in.properties'

export class KeyResultCheckIn extends Entity<
  KeyResultCheckInProperties,
  KeyResultCheckInPrimitives
> {}
