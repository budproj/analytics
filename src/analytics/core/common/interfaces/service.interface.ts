import { Entity } from '../entities/base.entity'

import { EntityRepository } from './repository.interface'

export interface EntityService<T extends Entity<unknown>> {
  repository: EntityRepository<T>
}
