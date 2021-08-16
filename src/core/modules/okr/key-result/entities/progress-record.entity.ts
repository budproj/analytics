import { Entity } from '@core/common/domain/base.entity'

import { KeyResultProgressRecordPrimitives } from '../primitives/progress-record.primitives'
import { KeyResultProgressRecordProperties } from '../properties/progress-record.properties'

export class KeyResultProgressRecord extends Entity<
  KeyResultProgressRecordProperties,
  KeyResultProgressRecordPrimitives
> {}
