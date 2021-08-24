import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'

import { Format } from '../value-objects/format.value-object'
import { Progress } from '../value-objects/progress.value-object'
import { Threshold } from '../value-objects/threshold.value-object'

export interface KeyResultProperties extends EntityProperties {
  initialValue: Threshold
  goal: Threshold
  format: Format
  progressHistory?: Progress[]
}
