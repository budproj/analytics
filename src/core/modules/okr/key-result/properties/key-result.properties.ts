import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'

import { Progress } from '../value-objects/progress.value-object'
import { Threshold } from '../value-objects/threshold.value-object'
import { Type } from '../value-objects/type.value-object'

export interface KeyResultProperties extends EntityProperties {
  initialValue: Threshold
  goal: Threshold
  type: Type
  progressHistory?: Progress[]
}
