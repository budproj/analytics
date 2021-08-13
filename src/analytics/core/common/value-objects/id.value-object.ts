import { v4 as uuidV4, validate } from 'uuid'

import { ArgumentInvalidException } from '../exceptions/argument-invalid.exception'
import { DomainPrimitive } from '../interfaces/domain-primitive.interface'

import { ValueObject } from './base.value-object'

export class ID extends ValueObject<string> {
  constructor(value: string) {
    super({ value })
  }

  public get value(): string {
    return this.properties.value
  }

  static generate(): ID {
    return new ID(uuidV4())
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!validate(value)) {
      throw new ArgumentInvalidException('Incorrect ID format')
    }
  }
}
