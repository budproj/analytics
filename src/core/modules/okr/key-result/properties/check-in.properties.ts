import { EntityProperties } from '@core/common/domain/interfaces/entity-properties.interface'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'

export interface CheckInProperties extends EntityProperties {
  value: NumberVO
}
