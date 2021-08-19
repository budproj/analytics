import { Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm'

import { CompanyORMEntityInterface } from '../interfaces/company.entity'
import { TeamORMEntityInterface } from '../interfaces/team.entity'
import { UserORMEntityInterface } from '../interfaces/user.entity'

import { ORMEntity } from './base.entity'

@Entity('company')
export class CompanyORMEntity extends ORMEntity implements CompanyORMEntityInterface {
  @OneToMany('team', 'company', { nullable: true })
  public teams?: TeamORMEntityInterface[]

  @JoinTable()
  @ManyToMany('user', 'companies', { nullable: true })
  public users?: UserORMEntityInterface[]
}
