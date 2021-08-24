export interface ProgressHistoryRequest {
  keyResultId: string
  window?: number
  startDate?: string
}

export interface CalculateProgressRequest {
  value: number
  keyResultData: KeyResultProgressData
}

interface KeyResultProgressData {
  initialValue: number
  goal: number
  format: number
}
