import { Core } from 'src/core/core.interface'

import { PrimaryPort } from '../primary/primary.port'

import { PortResponse } from './port-response.type'

export type PrimaryPortConstructor<T extends PortResponse> = new (core: Core) => PrimaryPort<T>
