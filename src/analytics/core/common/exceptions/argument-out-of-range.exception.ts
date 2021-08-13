import { Exception } from './base.exception'
import { ExceptionName } from './exception-name.enum'

export class ArgumentOutOfRangeException extends Exception {
  public readonly name = ExceptionName.ARGUMENT_OUT_OF_RANGE
}
