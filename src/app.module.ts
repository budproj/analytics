import { Module } from '@nestjs/common'

import { GRPCConfigModule } from './infrastructure/config/grpc/grpc.module'
import { LoggingConfigModule } from './infrastructure/config/logging/logging.module'
import { GRPCModule } from './infrastructure/grpc/grpc.module'

@Module({
  imports: [GRPCModule, GRPCConfigModule, LoggingConfigModule],
})
export class AppModule {}
