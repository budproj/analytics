import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { loggingConfig } from './logging.config'
import { LoggingEnvironmentSchema } from './logging.environment-schema'
import { LoggingConfigProvider } from './logging.provider'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loggingConfig],
      validationSchema: LoggingEnvironmentSchema,
    }),
  ],
  providers: [ConfigService, LoggingConfigProvider],
  exports: [ConfigService, LoggingConfigProvider],
})
export class LoggingConfigModule {}
