import { Entity } from '../entities/base.entity'
import { EntityRepository } from '../repositories/base.repository'

import { EntityObject } from './entity-object.interface'

export interface EntityService<E extends Entity<any, any>, O extends EntityObject> {
  repository: EntityRepository<O, E>
}
