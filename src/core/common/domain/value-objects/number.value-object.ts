import { ArgumentInvalidException } from '../../exceptions/argument-invalid.exception'
import { DomainPrimitive } from '../interfaces/domain-primitive.interface'

import { ValueObject } from './base.value-object'

export class NumberVO extends ValueObject<number> {
  constructor(value?: number) {
    super({ value })
  }

  public get value(): number {
    return this.properties.value
  }

  public static now(): NumberVO {
    return new NumberVO(0)
  }

  protected validate({ value }: DomainPrimitive<number>): void {
    if (Number.isNaN(value)) {
      throw new ArgumentInvalidException('Invalid number value')
    }
  }
}
