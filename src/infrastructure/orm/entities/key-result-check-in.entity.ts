import { Column, Entity, ManyToOne, RelationId } from 'typeorm'

import { KeyResultCheckInORMEntityInterface } from '../interfaces/key-result-check-in.entity'
import { KeyResultORMEntityInterface } from '../interfaces/key-result.entity'

import { ORMEntity } from './base.entity'

@Entity('key_result_check_in')
export class KeyResultCheckInORMEntity
  extends ORMEntity
  implements KeyResultCheckInORMEntityInterface
{
  @Column()
  @RelationId((keyResultCheckIn: KeyResultCheckInORMEntity) => keyResultCheckIn.keyResult)
  public keyResultId: string

  @ManyToOne('key_result', 'keyResultCheckIns')
  public keyResult: KeyResultORMEntityInterface
}
