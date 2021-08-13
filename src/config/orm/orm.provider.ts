import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import {
  ORMAuthenticationConfigInterface,
  ORMConventionsConfigInterface,
  ORMEndpointConfigInterface,
  ORMLoggingConfigInterface,
  ORMPatternConfigInterface,
} from './orm.interface'

@Injectable()
export class ORMConfigProvider {
  constructor(private readonly configService: ConfigService) {}

  get type(): string {
    return this.configService.get<string>('orm.type')
  }

  get endpoint(): ORMEndpointConfigInterface {
    return this.configService.get<ORMEndpointConfigInterface>('orm.endpoint')
  }

  get authentication(): ORMAuthenticationConfigInterface {
    return this.configService.get<ORMAuthenticationConfigInterface>('orm.authentication')
  }

  get pattern(): ORMPatternConfigInterface {
    return this.configService.get<ORMPatternConfigInterface>('orm.pattern')
  }

  get logging(): ORMLoggingConfigInterface {
    return this.configService.get<ORMLoggingConfigInterface>('orm.logging')
  }

  get conventions(): ORMConventionsConfigInterface {
    return this.configService.get<ORMConventionsConfigInterface>('orm.conventions')
  }
}
