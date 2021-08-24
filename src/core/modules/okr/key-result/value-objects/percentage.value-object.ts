import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

import { Threshold } from './threshold.value-object'

export class Percentage extends ValueObject<number> {
  private readonly base: number
  private readonly offset: number

  constructor(
    number: NumberVO,
    base?: Threshold,
    options: {
      offset?: Threshold
    } = {},
  ) {
    super({ value: number.value })

    this.offset = options.offset.value ?? 0
    this.base = base.value ?? 100
  }

  public get value(): number {
    return (this.properties.value - this.offset) / (this.base - this.offset)
  }

  static generate(): Percentage {
    const number = NumberVO.generate()

    return new Percentage(number)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Incorrect percentage format')
    }
  }
}
