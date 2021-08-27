import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

import { TypeCategory } from '../enums/type-category.enum'

export class Type extends ValueObject<TypeCategory> {
  constructor(value: TypeCategory) {
    super({ value })
  }

  public get value(): TypeCategory {
    return this.properties.value
  }

  static generate(): Type {
    return new Type(TypeCategory.ASCENDING)
  }

  protected validate({ value }: DomainPrimitive<TypeCategory>): void {
    if (!value || !Object.values(TypeCategory).includes(value)) {
      throw new ArgumentInvalidException('Incorrect type category')
    }
  }
}
