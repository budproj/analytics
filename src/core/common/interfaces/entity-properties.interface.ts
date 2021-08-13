import { DateVO } from '../value-objects/date.value-object'
import { ID } from '../value-objects/id.value-object'

export interface EntityProperties {
  id: ID
  createdAt: DateVO
  updatedAt: DateVO
}
