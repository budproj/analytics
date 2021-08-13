import * as Joi from '@hapi/joi'

import { LogLevel } from '@lib/logger'

export const LoggingEnvironmentSchema = Joi.object({
  LOGGING_LOGLEVEL: Joi.string()
    .valid(...Object.keys(LogLevel))
    .default('ERROR'),
  LOGGING_SERVICE_NAME: Joi.string().default('analytics@unknown'),
})
