import { Core } from 'src/core/core.interface'

import { Port } from '../interfaces/port.interface'

export abstract class PrimaryPort<T> implements Port<T> {
  public constructor(protected readonly core: Core) {}

  public abstract execute(...properties: any[]): T | Promise<T>
}
