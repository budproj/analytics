import { registerAs } from '@nestjs/config'

import { ORMConfigInterface } from './orm.interface'

export const ormConfig = registerAs('orm', (): ORMConfigInterface => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cliConfig = require('./orm-cli.config')

  return {
    type: cliConfig.type,

    endpoint: {
      host: cliConfig.host,
      port: cliConfig.port,
      database: cliConfig.database,
    },

    authentication: {
      user: cliConfig.username,
      password: cliConfig.password,
    },

    pattern: {
      file: {
        entities: cliConfig.entities,
        migrations: cliConfig.migrations,
      },

      directory: {
        migrations: cliConfig.cli.migrationsDir,
      },
    },

    logging: {
      enabled: cliConfig.logging,
    },

    conventions: {
      naming: cliConfig.namingStrategy,
    },
  }
})
