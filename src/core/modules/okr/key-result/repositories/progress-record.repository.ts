import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { EntityRepository } from '@core/common/domain/base.repository'
import { ID } from '@core/common/domain/value-objects/id.value-object'

import { ProgressRecord } from '../entities/progress-record.entity'
import { ProgressRecordPrimitives } from '../primitives/progress-record.primitives'
import { ProgressRecordProperties } from '../properties/progress-record.properties'

export class ProgressRecordRepository extends EntityRepository<
  ProgressRecordPrimitives,
  ProgressRecordProperties,
  ProgressRecord
> {
  public constructor(persistenceAdapter: PersistenceAdapter) {
    super(ProgressRecord.name, persistenceAdapter)
  }

  public async getOne(indexes: Partial<ProgressRecordProperties>): Promise<ProgressRecord> {
    const persistedData = await this.persistence.getOneFromDatabase(indexes)

    return ProgressRecord.load(persistedData)
  }

  public async getMany(indexes: Partial<ProgressRecordProperties>): Promise<ProgressRecord[]> {
    const persistedData = await this.persistence.getManyFromDatabase(indexes)

    return persistedData.map((data) => ProgressRecord.load(data))
  }

  public async getAllFromKeyResultID(keyResultId: ID): Promise<ProgressRecord[]> {
    return this.getMany({ keyResultId })
  }
}
