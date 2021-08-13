import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { ORMEnvironmentSchema } from './orm-environment.schema'
import { ormConfig } from './orm.config'
import { ORMConfigProvider } from './orm.provider'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ormConfig],
      validationSchema: ORMEnvironmentSchema,
    }),
  ],
  providers: [ConfigService, ORMConfigProvider],
  exports: [ConfigService, ORMConfigProvider],
})
export class ORMConfigModule {}
