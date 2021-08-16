import { Primitive } from '../types/primitive.type'

export interface DomainPrimitive<T extends Primitive | Date> {
  value: T
}
