import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'

import { grpcClientOptions } from '../grpc-client.options'

import { AnalyticsController } from './analytics.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANALYTICS_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [AnalyticsController],
})
export class AnalyticsModule {}
