import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { NumberVO } from '@core/common/domain/value-objects/number.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

import { Progress } from './progress.value-object'

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

  public calculateProgress(value: NumberVO, rightThreshold: Threshold): Progress {
    const progress = new Progress(0)

    return progress
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Incorrect threshold format')
    }
  }
}
