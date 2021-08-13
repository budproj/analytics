import {
  KeyResultProgressHistoryRequest,
  ProgressHistoryResponse,
} from '@analytics/interface/key-result.interface'

import { PrimaryPort } from './primary.port'

export class GetKeyResultProgressHistory extends PrimaryPort<ProgressHistoryResponse> {
  public async execute(request: KeyResultProgressHistoryRequest): Promise<ProgressHistoryResponse> {
    console.log(request)
    return [] as any
  }
}
