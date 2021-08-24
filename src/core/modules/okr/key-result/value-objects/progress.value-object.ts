import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

export class Progress extends ValueObject<number> {
  constructor(value: number) {
    super({ value })
  }

  public get value(): number {
    return this.properties.value
  }

  static generate(): Progress {
    return new Progress(0)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value) || value < 0 || value >= 1) {
      throw new ArgumentInvalidException('Incorrect progress format')
    }
  }
}
