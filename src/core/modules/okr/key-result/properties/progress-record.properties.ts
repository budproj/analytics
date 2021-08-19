import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { Progress } from '../value-objects/progress.value-object'

export interface KeyResultProgressRecordProperties extends EntityProperties {
  keyResultId: ID
  progress: Progress
  date: DateVO
}
