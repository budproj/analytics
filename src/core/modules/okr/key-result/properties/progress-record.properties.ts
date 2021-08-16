import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { Progress } from '../value-objects/progress.value-object'

export interface KeyResultProgressRecordProperties extends EntityProperties {
  keyResultId: ID
  progress: Progress
}
