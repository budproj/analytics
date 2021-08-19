import { PersistenceAdapter } from '@adapters/persistence.adapter'

import { EntityPrimitives } from '../domain/interfaces/entity-object.interface'
import { EntityProperties } from '../domain/interfaces/entity-properties.interface'
import { unmarshalProperties } from '../utils/unmarshal-properties.util'

export class PersistencePorts<P extends EntityProperties, O extends EntityPrimitives> {
  private readonly adapter: PersistenceAdapter

  public constructor(private readonly entityName: string, adapter: PersistenceAdapter) {
    this.adapter = adapter
  }

  public async getManyFromDatabase(request: Partial<P>): Promise<O[]> {
    const indexes = unmarshalProperties<O>(request)

    return this.adapter.getManyFromNamedEntity<O>(indexes, this.entityName)
  }
}
