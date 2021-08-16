import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { ORMService } from '@infrastructure/orm/orm.service'

import { EntityPrimitives } from '../domain/interfaces/entity-object.interface'
import { EntityProperties } from '../domain/interfaces/entity-properties.interface'
import { unmarshalProperties } from '../utils/unmarshal-properties.util'

export class PersistencePorts<P extends EntityProperties, O extends EntityPrimitives> {
  private readonly adapter: PersistenceAdapter<O>

  public constructor(private readonly entityName: string, adapter?: PersistenceAdapter<O>) {
    this.adapter = adapter ?? new ORMService()
  }

  public async getManyFromDatabase(request: Partial<P>): Promise<O[]> {
    const indexes = unmarshalProperties<O>(request)

    return this.adapter.getManyFromNamedEntity(indexes, this.entityName)
  }
}
