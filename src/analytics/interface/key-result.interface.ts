export interface KeyResultProgressHistoryRequest {
  id: string
}

export type ProgressHistoryResponse = ProgressRecord[]

export interface ProgressRecord {
  id: string
  progress: number
  timestamp: number
}
