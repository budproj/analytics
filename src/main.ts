import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'

import { buildLogger } from '@lib/logger'

import { AppModule } from './app.module'
import { GRPCConfigModule } from './config/grpc/grpc.module'
import { GRPCConfigProvider } from './config/grpc/grpc.provider'
import { LoggingConfigModule } from './config/logging/logging.module'
import { LoggingConfigProvider } from './config/logging/logging.provider'

async function bootstrap() {
  const grpcConfigContext = await NestFactory.createApplicationContext(GRPCConfigModule)
  const loggingConfigContext = await NestFactory.createApplicationContext(LoggingConfigModule)

  const grpcConfig = grpcConfigContext.get(GRPCConfigProvider)
  const loggingConfig = loggingConfigContext.get(LoggingConfigProvider)

  const logger = buildLogger(loggingConfig.level, loggingConfig.serviceName)

  const grpc = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcConfig.connection,
  )

  grpc.useLogger(logger)

  await grpc.listen()
  logger.log(`GRPC server listening on port ${grpcConfig.port}`)
}

void bootstrap()
