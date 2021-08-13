import { GetManyFromDatabase } from '../secondary/get-many-from-database.port'
import { SecondaryPort } from '../secondary/secondary.port'
import { PortResponse } from '../types/port-response.type'
import { SecondaryPortConstructor } from '../types/secondary-port-constructor.type'
import { SecondaryPortKey } from '../types/secondary-port-key.type'

import { PortFactory } from './factory.interface'

export class SecondaryPortFactory implements PortFactory {
  private readonly ports: Record<SecondaryPortKey, SecondaryPortConstructor<PortResponse>>

  constructor() {
    this.ports = {
      'get-many-from-database': GetManyFromDatabase,
    }
  }

  public buildPort<T extends PortResponse>(key: SecondaryPortKey): SecondaryPort<T> {
    const Port = this.ports[key]
    return new Port()
  }
}
