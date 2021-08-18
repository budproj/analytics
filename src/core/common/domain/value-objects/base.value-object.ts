import { ArgumentNotProvidedException } from '../../exceptions/argument-not-provided.exception'
import { isEmpty } from '../../utils/is-empty.util'
import { unmarshalProperties } from '../../utils/unmarshal-properties.util'
import { DomainPrimitive } from '../interfaces/domain-primitive.interface'
import { Primitive } from '../types/primitive.type'
import { ValueObjectProperties } from '../types/value-object-properties.type'

export abstract class ValueObject<T> {
  protected readonly properties: ValueObjectProperties<T>

  constructor(properties: ValueObjectProperties<T>) {
    this.checkIfEmpty(properties)
    this.validate(properties)
    this.properties = properties
  }

  static isValueObject(object: unknown): object is ValueObject<unknown> {
    return object instanceof ValueObject
  }

  public isEqual(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false
    }

    return JSON.stringify(this) === JSON.stringify(vo)
  }

  public isGreaterThan(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false
    }

    return JSON.stringify(this) > JSON.stringify(vo)
  }

  public isLesserThan(vo: ValueObject<T>): boolean {
    return !this.isGreaterThan(vo)
  }

  public getRawProps(): T {
    if (this.isDomainPrimitive(this.properties)) {
      return this.properties.value
    }

    const propertiesCopy = unmarshalProperties<T>(this.properties)

    return Object.freeze(propertiesCopy)
  }

  private checkIfEmpty(properties: ValueObjectProperties<T>): void {
    if (isEmpty(properties) || (this.isDomainPrimitive(properties) && isEmpty(properties.value))) {
      throw new ArgumentNotProvidedException('Property cannot be empty')
    }
  }

  private isDomainPrimitive(object: unknown): object is DomainPrimitive<T & (Primitive | Date)> {
    if (Object.prototype.hasOwnProperty.call(object, 'value')) {
      return true
    }

    return false
  }

  protected abstract validate(properties: ValueObjectProperties<T>): void
}
