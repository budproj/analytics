import { Module } from '@nestjs/common'

import { ORMModule } from '@infrastructure/orm/orm.module'

import { GRPCConfigModule } from './config/grpc/grpc.module'
import { LoggingConfigModule } from './config/logging/logging.module'
import { GRPCModule } from './interface/grpc/grpc.module'

@Module({
  imports: [GRPCModule, GRPCConfigModule, LoggingConfigModule, ORMModule],
})
export class AppModule {}
