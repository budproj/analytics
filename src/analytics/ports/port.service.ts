import { PortFactory } from './factories/factory.interface'
import { PrimaryPortFactory } from './factories/primary.factory'
import { PortType } from './types/port-type.type'
import { PrimaryPortKey } from './types/primary-port-key.type'

export class PortService {
  private readonly factories: Record<PortType, PortFactory>

  constructor(
    private readonly type: PortType,
    private readonly primaryFactory?: PrimaryPortFactory,
  ) {
    this.factories = {
      primary: this.primaryFactory ?? new PrimaryPortFactory(),
    }
  }

  public async dispatch<T>(key: PrimaryPortKey, ...portArguments: any[]): Promise<T> {
    const factory = this.factories[this.type]
    const port = factory.buildPort<T>(key)

    return port.execute(...portArguments)
  }
}
