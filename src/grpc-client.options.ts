// eslint-disable-next-line unicorn/import-style
import { join } from 'path'

import { ClientOptions, Transport } from '@nestjs/microservices'

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'analytics',
    protoPath: join(__dirname, './analytics/analytics.proto'),
    url: 'localhost:50052',
  },
}
