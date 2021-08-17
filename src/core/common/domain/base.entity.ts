import { ArgumentInvalidException } from '../exceptions/argument-invalid.exception'
import { ArgumentNotProvidedException } from '../exceptions/argument-not-provided.exception'
import { ArgumentOutOfRangeException } from '../exceptions/argument-out-of-range.exception'
import { isEmpty } from '../utils/is-empty.util'
import { unmarshalProperties } from '../utils/unmarshal-properties.util'

import { EntityPrimitives } from './interfaces/entity-object.interface'
import { EntityProperties } from './interfaces/entity-properties.interface'
import { DateVO } from './value-objects/date.value-object'
import { ID } from './value-objects/id.value-object'

export abstract class Entity<P extends EntityProperties, O extends EntityPrimitives> {
  protected readonly properties: P
  private readonly _id: ID
  private readonly _createdAt: DateVO
  private readonly _updatedAt: DateVO

  constructor(properties: P) {
    const now = DateVO.now()

    this.validateProps(properties)
    this._id = properties.id ?? ID.generate()
    this._createdAt = properties.createdAt ?? now
    this._updatedAt = properties.updatedAt ?? now
    this.properties = properties
  }

  get id(): ID {
    return this._id
  }

  get createdAt(): DateVO {
    return this._createdAt
  }

  get updatedAt(): DateVO {
    return this._updatedAt
  }

  static isEntity(entity: unknown): entity is Entity<any, any> {
    return entity instanceof Entity
  }

  public isEqual(object?: Entity<P, O>): boolean {
    if (object === null || object === undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!Entity.isEntity(object)) {
      return false
    }

    return this.id ? this.id.isEqual(object.id) : false
  }

  public isGreaterThan(other: Entity<P, O>, comparissonProperty: keyof O = 'createdAt'): boolean {
    const thisPrimitives = this.toObject()
    const otherPrimitives = other.toObject()

    return thisPrimitives[comparissonProperty] > otherPrimitives[comparissonProperty]
  }

  public getPropsCopy(): P & EntityProperties {
    const propertiesCopy = {
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      ...this.properties,
    }
    return Object.freeze(propertiesCopy)
  }

  public toObject(): O {
    const propertiesCopy = unmarshalProperties<O>(this.properties)

    const result = {
      id: this._id.value,
      createdAt: this._createdAt.value,
      updatedAt: this._updatedAt.value,
      ...propertiesCopy,
    }
    return Object.freeze(result)
  }

  private validateProps(properties: P) {
    const maxProperties = 50

    if (isEmpty(properties)) {
      throw new ArgumentNotProvidedException('Entity props should not be empty')
    }

    if (typeof properties !== 'object') {
      throw new ArgumentInvalidException('Entity props should be an object')
    }

    if (Object.keys(properties).length > maxProperties) {
      throw new ArgumentOutOfRangeException(
        `Entity props should not have more then ${maxProperties} properties`,
      )
    }
  }
}
