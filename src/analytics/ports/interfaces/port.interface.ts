import { PortResponse } from '../types/port-response.type'

export interface Port<T extends PortResponse = PortResponse> {
  execute: (...properties: any[]) => T | Promise<T>
}
