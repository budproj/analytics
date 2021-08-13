import { Core } from 'src/core/core.interface'
import { CoreService } from 'src/core/core.service'

import { GetKeyResultProgressHistory } from '../primary/get-key-result-progress-history.port'
import { PrimaryPort } from '../primary/primary.port'
import { PortResponse } from '../types/port-response.type'
import { PrimaryPortConstructor } from '../types/primary-port-constructor.type'
import { PrimaryPortKey } from '../types/primary-port-key.type'

import { PortFactory } from './factory.interface'

export class PrimaryPortFactory implements PortFactory {
  private readonly core: Core
  private readonly ports: Record<PrimaryPortKey, PrimaryPortConstructor<PortResponse>>

  constructor() {
    this.core = new CoreService()
    this.ports = {
      'get-key-result-progress-history': GetKeyResultProgressHistory,
    }
  }

  public buildPort<T extends PortResponse>(key: PrimaryPortKey): PrimaryPort<T> {
    const Port = this.ports[key]
    return new Port(this.core)
  }
}
