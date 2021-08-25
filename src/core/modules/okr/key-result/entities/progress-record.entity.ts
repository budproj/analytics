import { Entity } from '@core/common/domain/base.entity'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'

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

  static load(primitives: KeyResultProgressRecordPrimitives): KeyResultProgressRecord {
    const genericProperties = Entity.marshalGenericProperties(primitives)
    const properties: KeyResultProgressRecordProperties = {
      ...genericProperties,
      keyResultId: new ID(primitives.keyResultId),
      progress: new Progress(primitives.progress),
      date: new DateVO(primitives.date),
    }

    return new KeyResultProgressRecord(properties)
  }

  protected get comparissonProperty(): keyof KeyResultProgressRecordPrimitives {
    return 'date'
  }
}
