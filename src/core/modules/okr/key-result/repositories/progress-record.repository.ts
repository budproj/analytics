import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { EntityRepository } from '@core/common/domain/base.repository'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { KeyResultProgressRecord } from '../entities/progress-record.entity'
import { KeyResultProgressRecordPrimitives } from '../primitives/progress-record.primitives'
import { KeyResultProgressRecordProperties } from '../properties/progress-record.properties'

export class KeyResultProgressRecordRepository extends EntityRepository<
  KeyResultProgressRecordPrimitives,
  KeyResultProgressRecordProperties,
  KeyResultProgressRecord
> {
  public constructor(persistenceAdapter: PersistenceAdapter) {
    super(KeyResultProgressRecord.name, persistenceAdapter)
  }

  public async getMany(
    indexes: Partial<KeyResultProgressRecordProperties>,
  ): Promise<KeyResultProgressRecord[]> {
    const persistedData = await this.persistence.getManyFromDatabase(indexes)

    return persistedData.map((data) => KeyResultProgressRecord.load(data))
  }

  public async getAllFromKeyResultID(keyResultId: ID): Promise<KeyResultProgressRecord[]> {
    return this.getMany({ keyResultId })
  }
}
