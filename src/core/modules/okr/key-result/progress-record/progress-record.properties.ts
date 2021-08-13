import { EntityProperties } from 'src/core/common/interfaces/entity-properties.interface'
import { ID } from 'src/core/common/value-objects/id.value-object'

export interface KeyResultProgressRecordProperties extends EntityProperties {
  keyResultId: ID
}
