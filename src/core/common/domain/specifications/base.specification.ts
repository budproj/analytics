export abstract class Specification<T> {
  protected readonly currentRevision: (candidate: T) => boolean

  public and(other: Specification<T>) {
    return new AndSpecification(this, other)
  }

  public not() {
    return new NotSpecification(this)
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.currentRevision(candidate)
  }
}

class AndSpecification<T> extends Specification<T> {
  private readonly one: Specification<T>
  private readonly other: Specification<T>

  public constructor(one: Specification<T>, other: Specification<T>) {
    super()
    this.one = one
    this.other = other
  }

  public isSatisfiedBy(candidate: T) {
    return this.one.isSatisfiedBy(candidate) && this.other.isSatisfiedBy(candidate)
  }
}

class NotSpecification<T> extends Specification<T> {
  private readonly wrapped: Specification<T>

  public constructor(wrapped: Specification<T>) {
    super()
    this.wrapped = wrapped
  }

  public isSatisfiedBy(candidate: T) {
    return !this.wrapped.isSatisfiedBy(candidate)
  }
}
