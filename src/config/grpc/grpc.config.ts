// eslint-disable-next-line unicorn/import-style
import { join } from 'path'

import { registerAs } from '@nestjs/config'

import { GRPCConfigInterface } from './grpc.interface'

export const grpcConfig = registerAs(
  'grpc',
  (): GRPCConfigInterface => ({
    port: Number.parseInt(process.env.GRPC_PORT, 10),
    url: `localhost:${Number.parseInt(process.env.GRPC_PORT, 10)}`,
    package: process.env.GRPC_PACKAGES.split(','),
    protoPath: process.env.GRPC_PACKAGES.split(',').map((packageName) =>
      join(__dirname, `../../grpc/${packageName}.proto`),
    ),
  }),
)
