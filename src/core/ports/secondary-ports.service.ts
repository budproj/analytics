import { SecondaryPortFactory } from './factories/secondary.factory'
import { PortsService } from './interfaces/service.interface'
import { SecondaryPortKey } from './types/secondary-port-key.type'

export class SecondaryPorts implements PortsService {
  private readonly factory: SecondaryPortFactory = new SecondaryPortFactory()

  public async dispatch<T>(key: SecondaryPortKey, ...portArguments: any[]): Promise<T> {
    const port = this.factory.buildPort<T>(key)

    return port.execute(...portArguments)
  }
}
