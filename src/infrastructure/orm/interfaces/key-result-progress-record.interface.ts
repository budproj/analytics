import { ORMEntityInterface } from './base.interface'

export interface KeyResultProgressRecordORMEntityInterface extends ORMEntityInterface {
  progress: number
  date: Date
  keyResultId: string
  keyResultCheckInId: string
}
