import { Entity } from '@core/common/domain/base.entity'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { ProgressRecordPrimitives } from '../primitives/progress-record.primitives'
import { ProgressRecordProperties } from '../properties/progress-record.properties'
import { Progress } from '../value-objects/progress.value-object'

import { CheckIn } from './check-in.entity'
import { KeyResult } from './key-result.entity'

export class ProgressRecord extends Entity<ProgressRecordProperties, ProgressRecordPrimitives> {
  public get progress(): Progress {
    return this.properties.progress
  }

  public get date(): DateVO {
    return this.properties.date
  }

  static generate(primitives: Partial<ProgressRecordPrimitives>): ProgressRecord {
    const genericProperties = Entity.generate(primitives)
    const properties: ProgressRecordProperties = {
      ...genericProperties,
      keyResultId: new ID(primitives.keyResultId),
      progress: new Progress(primitives.progress),
      date: new DateVO(primitives.date),
    }

    return new ProgressRecord(properties)
  }

  static load(primitives: ProgressRecordPrimitives): ProgressRecord {
    const genericProperties = Entity.marshalGenericProperties(primitives)
    const properties: ProgressRecordProperties = {
      ...genericProperties,
      keyResultId: new ID(primitives.keyResultId),
      progress: new Progress(primitives.progress),
      date: new DateVO(primitives.date),
    }

    return new ProgressRecord(properties)
  }

  static fromCheckIn(checkIn: CheckIn, keyResult: KeyResult): ProgressRecord {
    const { id: keyResultID } = keyResult

    const percentage = keyResult.calculateValuePercentage(checkIn.value)
    const primitives = {
      keyResultId: keyResultID.value,
      progress: percentage.value,
      date: checkIn.createdAt.value,
    }

    return ProgressRecord.generate(primitives)
  }

  protected get comparissonProperty(): keyof ProgressRecordPrimitives {
    return 'date'
  }
}
