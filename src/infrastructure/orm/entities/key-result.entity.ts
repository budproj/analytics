import { Entity, OneToMany } from 'typeorm'

import { KeyResultProgressRecordORMEntityInterface } from '../interfaces/key-result-progress-record.interface'
import { KeyResultORMEntityInterface } from '../interfaces/key-result.entity'

import { ORMEntity } from './base.entity'

@Entity('key_result')
export class KeyResultORMEntity extends ORMEntity implements KeyResultORMEntityInterface {
  @OneToMany('key_result_progress_record', 'keyResult', { nullable: true })
  public progressRecords: KeyResultProgressRecordORMEntityInterface[]
}
