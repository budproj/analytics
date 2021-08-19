import { Entity, OneToMany } from 'typeorm'

import { KeyResultCheckInORMEntityInterface } from '../interfaces/key-result-check-in.entity'
import { KeyResultProgressRecordORMEntityInterface } from '../interfaces/key-result-progress-record.interface'
import { KeyResultORMEntityInterface } from '../interfaces/key-result.entity'

import { ORMEntity } from './base.entity'

@Entity('key_result')
export class KeyResultORMEntity extends ORMEntity implements KeyResultORMEntityInterface {
  @OneToMany('key_result_progress_record', 'keyResult', { nullable: true })
  public progressRecords?: KeyResultProgressRecordORMEntityInterface[]

  @OneToMany('key_result_check_in', 'keyResult', { nullable: true })
  public keyResultCheckIns: KeyResultCheckInORMEntityInterface[]
}
