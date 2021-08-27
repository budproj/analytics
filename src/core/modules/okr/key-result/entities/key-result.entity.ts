import { Entity } from '@core/common/domain/base.entity'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'

import { KeyResultPrimitives } from '../primitives/key-result.primitives'
import { KeyResultProperties } from '../properties/key-result.properties'
import { Percentage } from '../value-objects/percentage.value-object'
import { Threshold } from '../value-objects/threshold.value-object'
import { Type } from '../value-objects/type.value-object'

export class KeyResult extends Entity<KeyResultProperties, KeyResultPrimitives> {
  public get initialValue(): Threshold {
    return this.properties.initialValue
  }

  public get goal(): Threshold {
    return this.properties.goal
  }

  static load(primitives: KeyResultPrimitives): KeyResult {
    const genericProperties = Entity.marshalGenericProperties(primitives)
    const properties: KeyResultProperties = {
      ...genericProperties,
      initialValue: new Threshold(primitives.initialValue),
      goal: new Threshold(primitives.goal),
      type: new Type(primitives.type),
    }

    return new KeyResult(properties)
  }

  public calculateValuePercentage(value: NumberVO): Percentage {
    const offsetThreshold = this.initialValue.isBefore(this.goal) ? this.initialValue : this.goal
    const baseThreshold = this.goal.isAfter(this.initialValue) ? this.goal : this.initialValue

    return offsetThreshold.calculateProgress(value, baseThreshold)
  }
}
