import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory } from '@nestjs/typeorm'

import { ORMConfigProvider } from '@config/orm/orm.provider'

@Injectable()
export class ORMFactory implements TypeOrmOptionsFactory {
  constructor(private readonly config: ORMConfigProvider) {}

  public createTypeOrmOptions() {
    return {
      type: this.config.type as any,
      host: this.config.endpoint.host,
      port: this.config.endpoint.port,
      database: this.config.endpoint.database,
      username: this.config.authentication.user,
      password: this.config.authentication.password,
      namingStrategy: this.config.conventions.naming,
      logging: this.config.logging.enabled,
      entities: this.config.pattern.file.entities,
      migrations: this.config.pattern.file.migrations,
      cli: {
        migrationsDir: this.config.pattern.directory.migrations,
      },
    }
  }
}
