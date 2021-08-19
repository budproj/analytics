import { PersistenceAdapter } from '@adapters/persistence.adapter'

import { Entity } from '../domain/base.entity'
import { PersistencePorts } from '../ports/persistence.ports'

import { EntityPrimitives } from './interfaces/entity-object.interface'
import { EntityProperties } from './interfaces/entity-properties.interface'
import { DateVO } from './value-objects/date.value-object'
import { ID } from './value-objects/id.value-object'

export abstract class EntityRepository<
  O extends EntityPrimitives,
  P extends EntityProperties,
  E extends Entity<any, O>,
> {
  protected readonly persistence: PersistencePorts<P, O>

  public constructor(entityName: string, persistenceAdapter: PersistenceAdapter) {
    this.persistence = new PersistencePorts(entityName, persistenceAdapter)
  }

  protected marshalGenericProperties(properties: O): EntityProperties {
    return {
      id: new ID(properties.id),
      createdAt: new DateVO(properties.createdAt),
      updatedAt: new DateVO(properties.updatedAt),
    }
  }

  public abstract getMany(indexes: Partial<E>): Promise<E[]>

  protected abstract marshalEntityProperties(properties: O): EntityProperties
}
