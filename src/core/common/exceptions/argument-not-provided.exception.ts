import { Exception } from './base.exception'
import { ExceptionName } from './exception-name.enum'

export class ArgumentNotProvidedException extends Exception {
  public readonly name = ExceptionName.ARGUMENT_NOT_PROVIDED
}
