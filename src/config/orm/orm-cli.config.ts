import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export = {
  type: process.env.ORM_CONNECTION_TYPE,
  host: process.env.ORM_HOST,
  port: Number.parseInt(process.env.ORM_PORT, 10),
  username: process.env.ORM_USERNAME,
  password: process.env.ORM_PASSWORD,
  database: process.env.ORM_DATABASE,
  logging: process.env.ORM_LOGGING_ENABLED === 'true',
  namingStrategy:
    process.env.ORM_CONVENTION_NAMING_ENABLED === 'true' ? new SnakeNamingStrategy() : undefined,
  migrations: process.env.ORM_MIGRATIONS.split(','),
  entities: process.env.ORM_ENTITIES.split(','),
  cli: {
    migrationsDir: process.env.ORM_MIGRATIONS_DIR,
  },
}
