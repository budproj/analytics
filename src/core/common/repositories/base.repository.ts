import { ORMEntity } from '@infrastructure/orm/entities/base.entity'

import { Entity } from '../entities/base.entity'
import { EntityProperties } from '../interfaces/entity-properties.interface'
import { DateVO } from '../value-objects/date.value-object'
import { ID } from '../value-objects/id.value-object'

export abstract class EntityRepository<E extends Entity<unknown>, O extends ORMEntity> {
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
