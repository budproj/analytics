import { max, min } from 'lodash'

import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

export class Progress extends ValueObject<number> {
  static get min(): number {
    return 0
  }

  static get max(): number {
    return 1
  }

  constructor(primitiveValue: number) {
    const value = min([max([primitiveValue, Progress.min]), Progress.max])

    super({ value })
  }

  public get value(): number {
    return this.properties.value
  }

  static generate(): Progress {
    return new Progress(0)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Incorrect progress format')
    }
  }
}
