import { ORMEntity } from '@infrastructure/orm/entities/base.entity'
import { KeyResultProgressRecordORMEntity } from '@infrastructure/orm/entities/key-result-progress-record.entity'
import { KeyResultProgressRecord } from 'src/core/modules/okr/key-result/progress-record/progress-record.entity'

export class PersistenceAdapter {
  private readonly entityHashmap: Record<string, typeof ORMEntity> = {
    [KeyResultProgressRecord.name]: KeyResultProgressRecordORMEntity,
  }
}
