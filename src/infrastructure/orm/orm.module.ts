import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ORMConfigModule } from '@config/orm/orm.module'

import { ORMFactory } from './orm.factory'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ORMConfigModule],
      useClass: ORMFactory,
    }),
  ],
})
export class ORMModule {}