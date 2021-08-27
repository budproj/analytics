import { Column, Entity, ManyToOne, RelationId } from 'typeorm'

import { CompanyORMEntityInterface } from '../interfaces/company.entity'
import { TeamORMEntityInterface } from '../interfaces/team.entity'

import { ORMEntity } from './base.entity'

@Entity('team')
export class TeamORMEntity extends ORMEntity implements TeamORMEntityInterface {
  @Column()
  @RelationId((team: TeamORMEntity) => team.company)
  public companyId: string

  @ManyToOne('company', 'teams')
  public company: CompanyORMEntityInterface
}
