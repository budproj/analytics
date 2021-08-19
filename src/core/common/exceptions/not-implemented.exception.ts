import { Exception } from './base.exception'
import { ExceptionName } from './exception-name.enum'

export class NotImplementedException extends Exception {
  public readonly name = ExceptionName.NOT_IMPLEMENTED
}
