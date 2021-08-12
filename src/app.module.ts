import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { GRPCModule } from './grpc/grpc.module'

@Module({
  imports: [GRPCModule, ConfigModule],
})
export class AppModule {}
