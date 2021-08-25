import { PersistenceAdapter } from '@adapters/persistence.adapter'

import { Entity } from '../domain/base.entity'
import { PersistencePorts } from '../ports/persistence.ports'

import { EntityPrimitives } from './interfaces/entity-object.interface'
import { EntityProperties } from './interfaces/entity-properties.interface'

export abstract class EntityRepository<
  O extends EntityPrimitives,
  P extends EntityProperties,
  E extends Entity<any, O>,
> {
  protected readonly persistence: PersistencePorts<P, O>

  public constructor(entityName: string, persistenceAdapter: PersistenceAdapter) {
    this.persistence = new PersistencePorts(entityName, persistenceAdapter)
  }

  public abstract getOne(indexes: Partial<E>): Promise<E>

  public abstract getMany(indexes: Partial<E>): Promise<E[]>
}
