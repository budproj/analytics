import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

export class Threshold extends ValueObject<number> {
  constructor(value: number) {
    super({ value })
  }

  public get value(): number {
    return this.properties.value
  }

  static generate(): Threshold {
    return new Threshold(0)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Incorrect threshold format')
    }
  }
}
