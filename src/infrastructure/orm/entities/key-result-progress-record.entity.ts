import { Column, Entity, ManyToOne, OneToOne, RelationId } from 'typeorm'

import { KeyResultCheckInORMEntityInterface } from '../interfaces/key-result-check-in.entity'
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

  @Column()
  @RelationId((progressRecord: KeyResultProgressRecordORMEntity) => progressRecord.keyResultCheckIn)
  public keyResultCheckInId: string

  @OneToOne('key_result_check_in')
  public keyResultCheckIn: KeyResultCheckInORMEntityInterface
}
