import { KeyResultProgressRecordORMEntity } from '@infrastructure/orm/entities/key-result-progress-record.entity'
import { EntityRepository } from 'src/core/common/repositories/base.repository'
import { ID } from 'src/core/common/value-objects/id.value-object'
import { SecondaryPorts } from 'src/core/ports/secondary-ports.service'

import { KeyResultProgressRecord } from './progress-record.entity'
import { KeyResultProgressRecordProperties } from './progress-record.properties'

export class KeyResultProgressRecordRepository extends EntityRepository<
  KeyResultProgressRecord,
  KeyResultProgressRecordORMEntity
> {
  private readonly ports: SecondaryPorts = new SecondaryPorts()

  public async getMany(
    indexes: Partial<KeyResultProgressRecordProperties>,
  ): Promise<KeyResultProgressRecord[]> {
    const databaseResult = await this.ports.dispatch<KeyResultProgressRecordORMEntity[]>(
      'get-many-from-database',
      indexes,
      KeyResultProgressRecord,
    )
    const marshaledData = databaseResult.map((raw) => this.marshalEntityProperties(raw))

    return marshaledData.map((data) => new KeyResultProgressRecord(data))
  }

  public async getAllFromKeyResultID(keyResultId: ID): Promise<KeyResultProgressRecord[]> {
    return this.getMany({ keyResultId })
  }

  protected marshalEntityProperties(
    properties: KeyResultProgressRecordORMEntity,
  ): KeyResultProgressRecordProperties {
    return {
      ...this.marshalGenericProperties(properties),
      keyResultId: new ID(properties.keyResultId),
    }
  }
}
