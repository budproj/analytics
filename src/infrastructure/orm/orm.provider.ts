import { Injectable, OnModuleInit } from '@nestjs/common'
import { EntityManager, getManager } from 'typeorm'

import { PersistenceAdapter } from '@adapters/persistence.adapter'
import { KeyResultProgressRecord } from '@core/modules/okr/key-result/entities/progress-record.entity'

import { ORMEntity } from './entities/base.entity'
import { KeyResultProgressRecordORMEntity } from './entities/key-result-progress-record.entity'

@Injectable()
export class ORMProvider implements PersistenceAdapter, OnModuleInit {
  private manager: EntityManager
  private readonly entityHashmap: Record<string, typeof ORMEntity> = {
    [KeyResultProgressRecord.name]: KeyResultProgressRecordORMEntity,
  }

  public onModuleInit() {
    this.manager = getManager()
  }

  public async getManyFromNamedEntity<T>(indexes: Partial<T>, entityName: string): Promise<T[]> {
    const Entity = this.entityHashmap[entityName]

    // eslint-disable-next-line unicorn/no-array-callback-reference
    return this.manager.find<T>(Entity, indexes)
  }
}
