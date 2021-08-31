import { ServerCredentials } from '@grpc/grpc-js'

export interface GRPCConfig {
  port: number
  credentials: ServerCredentials
  url: string
  package: string[]
  protoPath: string[]
}
