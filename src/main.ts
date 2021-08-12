import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'

import { AppModule } from './app.module'
import { GRPCConfigProvider } from './config/grpc/grpc.provider'
import { GRPCModule } from './grpc/grpc.module'

async function bootstrap() {
  const grpcConfigContext = await NestFactory.createApplicationContext(GRPCModule)
  const grpcConfig = grpcConfigContext.get(GRPCConfigProvider)

  const grpc = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcConfig.connection,
  )

  grpc.listen(() => {
    console.log(`GRPC server listening on port ${grpcConfig.port}`)
  })
}

void bootstrap()
