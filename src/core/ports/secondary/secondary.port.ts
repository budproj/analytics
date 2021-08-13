import { Port } from '../interfaces/port.interface'

export abstract class SecondaryPort<T> implements Port<T> {
  public abstract execute(...properties: any[]): T | Promise<T>
}
