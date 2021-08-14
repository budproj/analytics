import { Entity } from 'src/core/common/entities/base.entity'

import { KeyResultProgressRecordObject } from './progress-record.object'
import { KeyResultProgressRecordProperties } from './progress-record.properties'

export class KeyResultProgressRecord extends Entity<
  KeyResultProgressRecordProperties,
  KeyResultProgressRecordObject
> {}
