import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ORMConfigModule } from '@config/orm/orm.module'

import { ORMFactory } from './orm.factory'
import { ORMService } from './orm.service'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ORMConfigModule],
      useClass: ORMFactory,
    }),
  ],
  providers: [ORMService],
  exports: [ORMService],
})
export class ORMModule {}
