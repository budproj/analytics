import { Entity } from '../domain/base.entity'
import { EntityPrimitives } from '../domain/interfaces/entity-object.interface'

export abstract class PrimaryPorts {
  protected unmarshalEntityList<T extends EntityPrimitives>(
    entityList: Array<Entity<any, any>>,
  ): T[] {
    return entityList.map((entity) => entity.toObject())
  }
}
