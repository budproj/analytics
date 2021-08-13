import { Entity } from '../entities/base.entity'
import { ObjectLiteral } from '../types/object-literal.type'

export interface EntityRepository<T extends Entity<unknown>> {
  getMany: (indexes: ObjectLiteral) => Promise<T[]>
}
