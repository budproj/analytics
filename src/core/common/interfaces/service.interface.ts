import { ORMEntity } from '@infrastructure/orm/entities/base.entity'

import { Entity } from '../entities/base.entity'
import { EntityRepository } from '../repositories/base.repository'

export interface EntityService<E extends Entity<unknown>, O extends ORMEntity> {
  repository: EntityRepository<E, O>
}
