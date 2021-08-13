import { ArgumentInvalidException } from '../exceptions/argument-invalid.exception'
import { DomainPrimitive } from '../interfaces/domain-primitive.interface'

import { ValueObject } from './base.value-object'

export class DateVO extends ValueObject<Date> {
  constructor(value: Date | string | number) {
    const date = new Date(value)
    super({ value: date })
  }

  public get value(): Date {
    return this.properties.value
  }

  public static now(): DateVO {
    return new DateVO(Date.now())
  }

  protected validate({ value }: DomainPrimitive<Date>): void {
    if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
      throw new ArgumentInvalidException('Incorrect date')
    }
  }
}
