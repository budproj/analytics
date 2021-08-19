import { Entity } from '@core/common/domain/base.entity'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'

import { KeyResultProgressRecordPrimitives } from '../primitives/progress-record.primitives'
import { KeyResultProgressRecordProperties } from '../properties/progress-record.properties'
import { Progress } from '../value-objects/progress.value-object'

export class KeyResultProgressRecord extends Entity<
  KeyResultProgressRecordProperties,
  KeyResultProgressRecordPrimitives
> {
  public get progress(): Progress {
    return this.properties.progress
  }

  public get date(): DateVO {
    return this.properties.date
  }

  protected get comparissonProperty(): keyof KeyResultProgressRecordPrimitives {
    return 'date'
  }
}
