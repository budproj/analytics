import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { EntityRepository } from '@core/common/domain/base.repository'

import { KeyResult } from '../entities/key-result.entity'
import { KeyResultPrimitives } from '../primitives/key-result.primitives'
import { KeyResultProperties } from '../properties/key-result.properties'

export class KeyResultRepository extends EntityRepository<
  KeyResultPrimitives,
  KeyResultProperties,
  KeyResult
> {
  public constructor(persistenceAdapter: PersistenceAdapter) {
    super(KeyResult.name, persistenceAdapter)
  }

  public async getOne(indexes: Partial<KeyResultProperties>): Promise<KeyResult> {
    const persistedData = await this.persistence.getOneFromDatabase(indexes)

    return KeyResult.load(persistedData)
  }

  public async getMany(indexes: Partial<KeyResultProperties>): Promise<KeyResult[]> {
    const persistedData = await this.persistence.getManyFromDatabase(indexes)

    return persistedData.map((data) => KeyResult.load(data))
  }
}
