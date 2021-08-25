import { Entity } from '@core/common/domain/base.entity'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'

import { CheckInPrimitives } from '../primitives/check-in.primitives'
import { CheckInProperties } from '../properties/check-in.properties'

export class CheckIn extends Entity<CheckInProperties, CheckInPrimitives> {
  public get value(): NumberVO {
    return this.properties.value
  }

  static load(primitives: CheckInPrimitives): CheckIn {
    const genericProperties = Entity.marshalGenericProperties(primitives)
    const properties: CheckInProperties = {
      ...genericProperties,
      value: new NumberVO(primitives.value),
    }

    return new CheckIn(properties)
  }

  static loadUnknown(primitives: { value: number; createdAt: Date }): CheckIn {
    return CheckIn.load({
      ...primitives,
      id: ID.generate().value,
      updatedAt: DateVO.now().value,
    })
  }
}
