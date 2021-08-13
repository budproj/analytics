import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GrpcOptions, Transport } from '@nestjs/microservices'

@Injectable()
export class GRPCConfigProvider {
  constructor(private readonly configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('grpc.port')
  }

  get url(): string {
    return this.configService.get<string>('grpc.url')
  }

  get package(): string[] {
    return this.configService.get<string[]>('grpc.package')
  }

  get protoPath(): string[] {
    return this.configService.get<string[]>('grpc.protoPath')
  }

  get connection(): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        url: this.url,
        package: this.package,
        protoPath: this.protoPath,
      },
    }
  }
}
