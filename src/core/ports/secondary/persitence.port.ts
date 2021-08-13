import { PersistenceAdapter } from '@infrastructure/persistence/persistence.service'

import { Port } from '../interfaces/port.interface'

export abstract class PersistencePort<T> implements Port<T> {
  protected readonly persistence: PersistenceAdapter = new PersistenceAdapter()

  public abstract execute(...properties: any[]): T | Promise<T>
}
