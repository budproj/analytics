import { Entity } from '@core/common/domain/base.entity'
import { DateVO } from '@core/common/domain/value-objects/date.value-object'
import { ID } from '@core/common/domain/value-objects/id.value-object'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'

import { KeyResultCheckInPrimitives } from '../primitives/key-result-check-in.primitives'
import { KeyResultCheckInProperties } from '../properties/key-result-check-in.properties'

export class KeyResultCheckIn extends Entity<
  KeyResultCheckInProperties,
  KeyResultCheckInPrimitives
> {
  static load(primitives: KeyResultCheckInPrimitives): KeyResultCheckIn {
    const genericProperties = Entity.marshalGenericProperties(primitives)
    const properties: KeyResultCheckInProperties = {
      ...genericProperties,
      value: new NumberVO(primitives.value),
    }

    return new KeyResultCheckIn(properties)
  }

  static loadUnknown(primitives: { value: number; createdAt: Date }): KeyResultCheckIn {
    return KeyResultCheckIn.load({
      ...primitives,
      id: ID.generate().value,
      updatedAt: DateVO.now().value,
    })
  }
}
