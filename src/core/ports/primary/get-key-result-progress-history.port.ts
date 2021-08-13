import { ID } from 'src/core/common/value-objects/id.value-object'
import { KeyResultProgressHistoryRequest } from 'src/interface/requests/key-result.request'
import { ProgressHistoryResponse } from 'src/interface/responses/key-result.response'

import { PrimaryPort } from './primary.port'

export class GetKeyResultProgressHistory extends PrimaryPort<ProgressHistoryResponse> {
  public async execute(request: KeyResultProgressHistoryRequest): Promise<ProgressHistoryResponse> {
    const keyResultID = new ID(request.keyResultID)
    const history = await this.core.okr.keyResult.getProgressHistoryForKeyResultID(keyResultID)

    const unmarshaledHistory = history.map((record) => record.toObject())
    console.log(unmarshaledHistory)

    return []
  }
}
