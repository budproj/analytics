import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

@Controller('analytics')
export class AnalyticsController {
  @GrpcMethod('AnalyticsService')
  findOne(data: any): any {
    console.log(data)
    return { id: 1, name: 'John' }
  }
}
