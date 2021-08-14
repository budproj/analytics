import { ArgumentInvalidException } from 'src/core/common/exceptions/argument-invalid.exception'
import { DomainPrimitive } from 'src/core/common/interfaces/domain-primitive.interface'
import { ValueObject } from 'src/core/common/value-objects/base.value-object'

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
    if (Number.isNaN(value) || value < 0 || value > 100) {
      throw new ArgumentInvalidException('Incorrect progress format')
    }
  }
}
