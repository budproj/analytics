import { Entity } from '../base.entity'
import { EntityRepository } from '../base.repository'

import { EntityPrimitives } from './entity-object.interface'

export interface EntityService<E extends Entity<any, any>, P extends EntityPrimitives> {
  repository: EntityRepository<P, E>
}
