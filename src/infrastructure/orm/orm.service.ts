import { EntityManager, getManager } from 'typeorm'

import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { KeyResultProgressRecord } from '@core/modules/okr/key-result/entities/progress-record.entity'

import { ORMEntity } from './entities/base.entity'
import { KeyResultProgressRecordORMEntity } from './entities/key-result-progress-record.entity'

export class ORMService implements PersistenceAdapter<ORMEntity> {
  private readonly manager: EntityManager = getManager()
  private readonly entityHashmap: Record<string, typeof ORMEntity> = {
    [KeyResultProgressRecord.name]: KeyResultProgressRecordORMEntity,
  }

  public async getManyFromNamedEntity<T extends ORMEntity>(
    indexes: Partial<T>,
    entityName: string,
  ): Promise<T[]> {
    const Entity = this.entityHashmap[entityName]

    // eslint-disable-next-line unicorn/no-array-callback-reference
    return this.manager.find<T>(Entity, indexes)
  }
}
