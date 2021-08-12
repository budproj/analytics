import { Module } from '@nestjs/common'

import { GRPCConfigModule } from './grpc/grpc.module'

@Module({
  imports: [GRPCConfigModule],
  exports: [GRPCConfigModule],
})
export class ConfigModule {}
