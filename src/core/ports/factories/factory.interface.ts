import { Port } from '../interfaces/port.interface'

export interface PortFactory {
  buildPort<T>(type: string): Port<T>
}
