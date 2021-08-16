import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ORMConfigModule } from '@config/orm/orm.module'

import { ORMFactory } from './orm.factory'
import { ORMProvider } from './orm.provider'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ORMConfigModule],
      useClass: ORMFactory,
    }),
  ],
  providers: [ORMProvider],
  exports: [ORMProvider],
})
export class ORMModule {}
