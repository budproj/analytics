import { Entity } from 'typeorm'

import { KeyResultCheckInORMEntityInterface } from '../interfaces/key-result-check-in.entity'

import { ORMEntity } from './base.entity'

@Entity('key_result_check_in')
export class KeyResultCheckInORMEntity
  extends ORMEntity
  implements KeyResultCheckInORMEntityInterface {}
