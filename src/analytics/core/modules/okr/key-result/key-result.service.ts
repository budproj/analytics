import { EntityService } from '../../../common/interfaces/service.interface'

import { KeyResult } from './key-result.entity'
import { KeyResultRepository } from './key-result.repository'

export class KeyResultService implements EntityService<KeyResult> {
  public repository: KeyResultRepository
}
