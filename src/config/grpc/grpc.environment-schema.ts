import * as Joi from '@hapi/joi'

export const GRPCEnvironmentSchema = Joi.object({
  GRPC_HOST: Joi.string().default('localhost'),
  GRPC_PORT: Joi.number().default(9090),
  GRPC_PACKAGES: Joi.string().required(),
  GRPC_PROTO_PATHS: Joi.string().required(),
})
