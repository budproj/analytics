import { ORMEntity } from '@infrastructure/orm/entities/base.entity'

import { PersistencePort } from './persitence.port'

export class GetManyFromDatabase<T extends ORMEntity> extends PersistencePort<T[]> {
  public async execute(request: Partial<T>): Promise<T[]> {
    console.log(request)
    return [] as any
  }
}
