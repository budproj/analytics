import { PrimaryPortFactory } from './factories/primary.factory'
import { PortsService } from './interfaces/service.interface'
import { PrimaryPortKey } from './types/primary-port-key.type'

export class PrimaryPorts implements PortsService {
  private readonly factory: PrimaryPortFactory = new PrimaryPortFactory()

  public async dispatch<T>(key: PrimaryPortKey, ...portArguments: any[]): Promise<T> {
    const port = this.factory.buildPort<T>(key)

    return port.execute(...portArguments)
  }
}
