import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

import { IsThresholdBeforeSpecification } from '../specifications/is-threshold-before.specification'

import { Percentage } from './percentage.value-object'
import { Type } from './type.value-object'

export class Threshold extends ValueObject<number> {
  public readonly type: Type

  constructor(
    value: number,
    options: {
      type?: Type
    } = {},
  ) {
    super({ value })

    this.type = options.type || Type.generate()
  }

  public get value(): number {
    return this.properties.value
  }

  static generate(): Threshold {
    return new Threshold(0)
  }

  public calculateProgress(value: NumberVO, maxThreshold: Threshold): Percentage {
    return new Percentage(value, maxThreshold, { offset: this })
  }

  public isBefore(threshold: Threshold): boolean {
    const specification = new IsThresholdBeforeSpecification(this)

    return specification.isSatisfiedBy(threshold)
  }

  public isAfter(threshold: Threshold): boolean {
    return !this.isBefore(threshold)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Incorrect threshold format')
    }
  }
}
