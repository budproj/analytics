import { DomainPrimitive } from '../interfaces/domain-primitive.interface'

import { Primitive } from './primitive.type'

export type ValueObjectProperties<T> = T extends Primitive | Date ? DomainPrimitive<T> : T
