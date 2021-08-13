import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { grpcConfig } from './grpc.config'
import { GRPCEnvironmentSchema } from './grpc.environment-schema'
import { GRPCConfigProvider } from './grpc.provider'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [grpcConfig],
      validationSchema: GRPCEnvironmentSchema,
    }),
  ],
  providers: [ConfigService, GRPCConfigProvider],
  exports: [ConfigService, GRPCConfigProvider],
})
export class GRPCConfigModule {}
