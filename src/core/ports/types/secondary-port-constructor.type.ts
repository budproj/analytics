import { SecondaryPort } from '../secondary/secondary.port'

import { PortResponse } from './port-response.type'

export type SecondaryPortConstructor<T extends PortResponse> = new () => SecondaryPort<T>
