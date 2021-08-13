import { Column, Entity, ManyToOne, RelationId } from 'typeorm'

import { KeyResultProgressRecordORMEntityInterface } from '../interfaces/key-result-progress-record.interface'
import { KeyResultORMEntityInterface } from '../interfaces/key-result.entity'

import { ORMEntity } from './base.entity'

@Entity('key_result_progress_record')
export class KeyResultProgressRecordORMEntity
  extends ORMEntity
  implements KeyResultProgressRecordORMEntityInterface
{
  @Column('numeric')
  public progress: number

  @Column()
  public date: Date

  @Column()
  @RelationId((progressRecord: KeyResultProgressRecordORMEntity) => progressRecord.keyResult)
  public keyResultId: string

  @ManyToOne('key_result', 'progressRecords')
  public keyResult: KeyResultORMEntityInterface
}
