import { Entity } from '@core/common/domain/base.entity'

import { KeyResultPrimitives } from '../primitives/key-result.primitives'
import { KeyResultProperties } from '../properties/key-result.properties'

export class KeyResult extends Entity<KeyResultProperties, KeyResultPrimitives> {}
