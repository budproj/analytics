import { Module } from '@nestjs/common'

import { OKRModule } from './okr/okr.module'

@Module({
  imports: [OKRModule],
})
export class GRPCModule {}
