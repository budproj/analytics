import { Column, Entity } from 'typeorm'

import { KeyResultProgressRecordORMEntityInterface } from '../interfaces/key-result-progress-record.interface'

import { ORMEntity } from './base.entity'

@Entity()
export class KeyResultProgressRecordORMEntity
  extends ORMEntity
  implements KeyResultProgressRecordORMEntityInterface
{
  @Column('numeric')
  public progress: number
}
