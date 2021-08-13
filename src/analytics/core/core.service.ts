import { Core } from './core.interface'
import { OKRService } from './modules/okr/okr.service'

export class CoreService implements Core {
  public okr: OKRService
}
