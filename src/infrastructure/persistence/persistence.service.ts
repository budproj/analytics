import { EntityManager, getManager } from 'typeorm'

import { ORMEntity } from '@infrastructure/orm/entities/base.entity'
import { KeyResultProgressRecordORMEntity } from '@infrastructure/orm/entities/key-result-progress-record.entity'
import { KeyResultProgressRecord } from 'src/core/modules/okr/key-result/progress-record/progress-record.entity'

export class PersistenceAdapter {
  private readonly manager: EntityManager = getManager()
  private readonly entityHashmap: Record<string, typeof ORMEntity> = {
    [KeyResultProgressRecord.name]: KeyResultProgressRecordORMEntity,
  }

  public async getManyFromEntity<T extends ORMEntity>(
    indexes: Partial<T>,
    entityName: string,
  ): Promise<T[]> {
    const Entity = this.entityHashmap[entityName]

    // eslint-disable-next-line unicorn/no-array-callback-reference
    return this.manager.find<T>(Entity, indexes)
  }
}
