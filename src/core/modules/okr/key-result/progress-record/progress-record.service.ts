import { KeyResultProgressRecordORMEntity } from '@infrastructure/orm/entities/key-result-progress-record.entity'

import { EntityService } from '../../../../common/interfaces/service.interface'

import { KeyResultProgressRecord } from './progress-record.entity'
import { KeyResultProgressRecordRepository } from './progress-record.repository'

export class KeyResultProgressRecordService
  implements EntityService<KeyResultProgressRecord, KeyResultProgressRecordORMEntity>
{
  public repository: KeyResultProgressRecordRepository = new KeyResultProgressRecordRepository()
}
