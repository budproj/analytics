export type ProgressHistoryResponse = {
  history: ProgressRecord[]
}

export interface ProgressRecord {
  id: string
  progress: number
  timestamp: number
}
