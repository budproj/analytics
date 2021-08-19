import { Module } from '@nestjs/common'

import { ORMModule } from '@infrastructure/orm/orm.module'

import { KeyResultController } from './key-result.controller'

@Module({
  imports: [ORMModule],
  controllers: [KeyResultController],
})
export class OKRModule {}
