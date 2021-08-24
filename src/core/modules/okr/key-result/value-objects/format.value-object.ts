import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

import { FormatCategory } from '../enums/format-category.enum'

export class Format extends ValueObject<FormatCategory> {
  constructor(value: FormatCategory) {
    super({ value })
  }

  public get value(): FormatCategory {
    return this.properties.value
  }

  static generate(): Format {
    return new Format(FormatCategory.PERCENTAGE)
  }

  protected validate({ value }: DomainPrimitive<FormatCategory>): void {
    if (!value || !Object.values(FormatCategory).includes(value)) {
      throw new ArgumentInvalidException('Incorrect key-result format category')
    }
  }
}
