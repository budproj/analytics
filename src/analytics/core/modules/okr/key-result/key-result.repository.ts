import { EntityRepository } from '@analytics/core/common/interfaces/repository.interface'

import { KeyResult } from './key-result.entity'

export class KeyResultRepository implements EntityRepository<KeyResult> {
  public async getMany(...arguments_: any[]): Promise<KeyResult[]> {
    return []
  }
}
