import { Column, Entity, OneToMany } from 'typeorm'

import { KeyResultCheckInORMEntityInterface } from '../interfaces/key-result-check-in.entity'
import { KeyResultProgressRecordORMEntityInterface } from '../interfaces/key-result-progress-record.interface'

import { ORMEntity } from './base.entity'

@Entity('key_result')
export class KeyResultORMEntity extends ORMEntity {
  @Column('numeric')
  public initialValue!: number

  @Column('numeric')
  public goal!: number

  @OneToMany('key_result_progress_record', 'keyResult', { nullable: true })
  public progressRecords?: KeyResultProgressRecordORMEntityInterface[]

  @OneToMany('key_result_check_in', 'keyResult', { nullable: true })
  public keyResultCheckIns: KeyResultCheckInORMEntityInterface[]
}
