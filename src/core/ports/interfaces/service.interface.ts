import { PrimaryPortKey } from '../types/primary-port-key.type'
import { SecondaryPortKey } from '../types/secondary-port-key.type'

export interface PortsService {
  dispatch: <T>(key: PrimaryPortKey | SecondaryPortKey, ...portArguments: any[]) => Promise<T>
}
