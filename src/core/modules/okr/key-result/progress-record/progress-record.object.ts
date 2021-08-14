import { EntityObject } from 'src/core/common/interfaces/entity-object.interface'

export interface KeyResultProgressRecordObject extends EntityObject {
  progress: number
  keyResultId: string
}
