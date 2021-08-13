import { registerAs } from '@nestjs/config'

import { LogLevel } from '@lib/logger'

import { LoggingConfig } from './logging.interface'

export const loggingConfig = registerAs(
  'logging',
  (): LoggingConfig => ({
    level: LogLevel[process.env.LOGGING_LOGLEVEL],
    serviceName: process.env.LOGGING_SERVICE_NAME,
  }),
)
