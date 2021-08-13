import { EntityRepository } from 'src/core/common/interfaces/repository.interface'
import { ID } from 'src/core/common/value-objects/id.value-object'
import { SecondaryPorts } from 'src/core/ports/secondary-ports.service'

import { KeyResultProgressRecord } from './progress-record.entity'
import { KeyResultProgressRecordProperties } from './progress-record.properties'

export class KeyResultProgressRecordRepository
  implements EntityRepository<KeyResultProgressRecord>
{
  private readonly ports: SecondaryPorts = new SecondaryPorts()

  public async getMany(
    indexes: Partial<KeyResultProgressRecordProperties>,
  ): Promise<KeyResultProgressRecord[]> {
    const rawData = await this.ports.dispatch<KeyResultProgressRecordProperties[]>(
      'get-many-from-database',
      indexes,
    )
    console.log(rawData)

    return []
  }

  public async getAllFromKeyResultID(keyResultID: ID): Promise<KeyResultProgressRecord[]> {
    return this.getMany({ keyResultID })
  }
}
