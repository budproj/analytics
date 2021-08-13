import { ObjectLiteral } from '../types/object-literal.type'

export interface SerializedException {
  name: string
  message: string
  stack?: string
  metadata?: ObjectLiteral
}
