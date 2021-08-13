import { EntityService } from '../../../../common/interfaces/service.interface'

import { KeyResultProgressRecord } from './progress-record.entity'
import { KeyResultProgressRecordRepository } from './progress-record.repository'

export class KeyResultProgressRecordService implements EntityService<KeyResultProgressRecord> {
  public repository: KeyResultProgressRecordRepository = new KeyResultProgressRecordRepository()
}
