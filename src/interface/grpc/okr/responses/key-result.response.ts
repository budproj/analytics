import { KeyResultProgressRecordPrimitives } from '@core/modules/okr/key-result/primitives/progress-record.primitives'

import { Response } from '../../interfaces/response.interface'

export interface ProgressHistoryResponse extends Response<KeyResultProgressRecordPrimitives[]> {}
