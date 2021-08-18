import { ORMEntityInterface } from './base.interface'

export interface KeyResultProgressRecordORMEntityInterface extends ORMEntityInterface {
  progress: number
  keyResultId: string
  date: Date
}
