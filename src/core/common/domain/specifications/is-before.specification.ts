import { DateVO } from '../value-objects/date.value-object'

import { Specification } from './base.specification'

export class IsBeforeSpecification extends Specification<DateVO> {
  protected readonly currentRevision = this.rev20210817IsLesserThan

  public constructor(private readonly date: DateVO) {
    super()
  }

  protected rev20210817IsLesserThan(candidate: DateVO): boolean {
    return this.date.isLesserThan(candidate)
  }
}
