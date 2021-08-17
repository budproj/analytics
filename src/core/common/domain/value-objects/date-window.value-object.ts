import { isSameDay, isSameWeek } from 'date-fns'

import { DomainPrimitive } from '@core/common/domain/interfaces/domain-primitive.interface'
import { ValueObject } from '@core/common/domain/value-objects/base.value-object'
import { ArgumentInvalidException } from '@core/common/exceptions/argument-invalid.exception'

import { DateWindowCategory } from '../enums/date-window-category.enum'

import { DateVO } from './date.value-object'

type DateWindowCompareFunction = (left: Date, right: Date) => boolean

export class DateWindow extends ValueObject<DateWindowCategory> {
  static readonly compareHashmap: Record<DateWindowCategory, DateWindowCompareFunction> = {
    [DateWindowCategory.DAY]: isSameDay,
    [DateWindowCategory.WEEK]: isSameWeek,
  }

  private readonly compare: DateWindowCompareFunction

  constructor(value: DateWindowCategory) {
    super({ value })

    this.compare = DateWindow.compareHashmap[value]
  }

  public get value(): DateWindowCategory {
    return this.properties.value
  }

  static generate(): DateWindow {
    return new DateWindow(DateWindowCategory.DAY)
  }

  public isInSameDateWindow(left: DateVO, right: DateVO): boolean {
    const leftPrimitive = left.value
    const rightPrimitive = right.value

    return this.compare(leftPrimitive, rightPrimitive)
  }

  protected validate({ value }: DomainPrimitive<DateWindowCategory>): void {
    if (!value || !Object.values(DateWindowCategory).includes(value)) {
      throw new ArgumentInvalidException('Incorrect date window category format')
    }
  }
}
