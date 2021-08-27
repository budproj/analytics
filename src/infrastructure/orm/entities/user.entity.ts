import { Entity, ManyToMany } from 'typeorm'

import { CompanyORMEntityInterface } from '../interfaces/company.entity'
import { UserORMEntityInterface } from '../interfaces/user.entity'

import { ORMEntity } from './base.entity'

@Entity('user')
export class UserORMEntity extends ORMEntity implements UserORMEntityInterface {
  @ManyToMany('company', 'users', { nullable: true })
  public companies?: CompanyORMEntityInterface[]
}
