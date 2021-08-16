import { Module } from '@nestjs/common'

import { KeyResultController } from './key-result.controller'

@Module({
  controllers: [KeyResultController],
})
export class OKRModule {}
