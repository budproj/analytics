import { Entity } from '@core/common/domain/base.entity'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { KeyResultProgressRecordPrimitives } from '../primitives/progress-record.primitives'
import { KeyResultProgressRecordProperties } from '../properties/progress-record.properties'
import { Progress } from '../value-objects/progress.value-object'

import { KeyResultCheckIn } from './key-result-check-in.entity'
import { KeyResult } from './key-result.entity'

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

  static generate(primitives: Partial<KeyResultProgressRecordPrimitives>): KeyResultProgressRecord {
    const genericProperties = Entity.generate(primitives)
    const properties: KeyResultProgressRecordProperties = {
      ...genericProperties,
      keyResultId: new ID(primitives.keyResultId),
      progress: new Progress(primitives.progress),
      date: new DateVO(primitives.date),
    }

    return new KeyResultProgressRecord(properties)
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

  static fromCheckIn(checkIn: KeyResultCheckIn, keyResult: KeyResult): KeyResultProgressRecord {
    const { id: keyResultID, initialValue, goal } = keyResult

    const offsetThreshold = initialValue.isBefore(goal) ? initialValue : goal
    const baseThreshold = goal.isAfter(initialValue) ? goal : initialValue

    const percentage = offsetThreshold.calculateProgress(checkIn.value, baseThreshold)
    const primitives = {
      keyResultId: keyResultID.value,
      progress: percentage.value,
      date: checkIn.createdAt.value,
    }

    return KeyResultProgressRecord.generate(primitives)
  }

  protected get comparissonProperty(): keyof KeyResultProgressRecordPrimitives {
    return 'date'
  }
}
