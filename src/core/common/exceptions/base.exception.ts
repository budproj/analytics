import { SerializedException } from '../interfaces/serialized-exception.interface'
import { ObjectLiteral } from '../types/object-literal.type'

import { ExceptionName } from './exception-name.enum'

export abstract class Exception extends Error {
  public abstract name: ExceptionName

  constructor(readonly message: string, readonly metadata?: ObjectLiteral) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON(): SerializedException {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      metadata: this.metadata,
    }
  }
}
