import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { LogLevel } from '@lib/logger'

@Injectable()
export class LoggingConfigProvider {
  constructor(private readonly configService: ConfigService) {}

  get level(): LogLevel {
    return this.configService.get<LogLevel>('logging.level')
  }

  get serviceName(): string {
    return this.configService.get<string>('logging.serviceName')
  }
}
