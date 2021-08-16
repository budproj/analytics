import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'

import { Progress } from '../value-objects/progress.value-object'

export interface KeyResultProperties extends EntityProperties {
  progressHistory: Progress[]
}
