import { Exception } from './base.exception'
import { ExceptionName } from './exception-name.enum'

export class ArgumentInvalidException extends Exception {
  public readonly name = ExceptionName.ARGUMENT_INVALID
}
