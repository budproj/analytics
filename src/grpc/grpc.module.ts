import { Module } from '@nestjs/common'
import { ClientProxyFactory } from '@nestjs/microservices'

import { GRPCConfigModule } from 'src/config/grpc/grpc.module'
import { GRPCConfigProvider } from 'src/config/grpc/grpc.provider'

import { AnalyticsController } from './analytics.controller'

@Module({
  imports: [GRPCConfigModule],
  providers: [
    {
      provide: 'GRPC_SERVER',
      useFactory: (configProvider: GRPCConfigProvider) => {
        const { connection } = configProvider

        return ClientProxyFactory.create(connection)
      },
      inject: [GRPCConfigProvider],
    },
  ],
  controllers: [AnalyticsController],
})
export class GRPCModule {}
