import * as Joi from '@hapi/joi'

export const ORMEnvironmentSchema = Joi.object({
  ORM_HOST: Joi.string().required(),
  ORM_USERNAME: Joi.string().required(),
  ORM_PASSWORD: Joi.string().required(),
  ORM_CONNECTION_TYPE: Joi.string().valid('postgres').default('postgres'),
  ORM_PORT: Joi.number().default(5432),
  ORM_DATABASE: Joi.string().default('dev'),
  ORM_ENTITIES: Joi.string().default('dist/src/**/*.orm-entity.js'),
  ORM_MIGRATIONS: Joi.string().default('dist/src/infrastructure/orm/migrations/*.js'),
  ORM_MIGRATIONS_DIR: Joi.string().default('src/infrastructure/orm/migrations'),
  ORM_LOGGING_ENABLED: Joi.boolean().default(false),
  ORM_CONVENTION_NAMING_ENABLED: Joi.boolean().default(true),
})
