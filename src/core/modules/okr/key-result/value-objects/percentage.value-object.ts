import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

export class Percentage extends ValueObject<number> {
  private readonly base: number
  private readonly offset: number

  constructor(
    value: number,
    base?: number,
    options: {
      offset?: number
    } = {},
  ) {
    super({ value })

    this.offset = options.offset ?? 0
    this.base = base ?? 100
  }

  public get value(): number {
    return (this.properties.value - this.offset) / (this.base - this.offset)
  }

  static generate(): Percentage {
    return new Percentage(0)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Incorrect percentage format')
    }
  }
}
