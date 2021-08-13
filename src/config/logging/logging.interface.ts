import { LogLevel } from '@lib/logger'

export interface LoggingConfig {
  level: LogLevel
  serviceName: string
}
