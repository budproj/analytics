import { ORMEntity } from '@infrastructure/orm/entities/base.entity'
import { Entity } from 'src/core/common/entities/base.entity'
import { EntityProperties } from 'src/core/common/interfaces/entity-properties.interface'
import { unmarshalProperties } from 'src/core/common/utils/unmarshal-properties.util'

import { PersistencePort } from './persitence.port'

export class GetManyFromDatabase<
  E extends EntityProperties,
  O extends ORMEntity,
> extends PersistencePort<O[]> {
  public async execute(request: Partial<E>, entity: typeof Entity): Promise<O[]> {
    const indexes = unmarshalProperties<O>(request)

    return this.persistence.getManyFromEntity<O>(indexes, entity.name)
  }
}
