export interface ProgressHistoryRequest {
  keyResultId: string
  window?: number
  startDate?: string
}

export interface ProgressHistoryWithStaticHeadRequest extends ProgressHistoryRequest {
  headKeyResultCheckInData: KeyResultCheckInData
}

export interface CalculateProgressRequest {
  value: number
  keyResultData: KeyResultProgressData
}

interface KeyResultProgressData {
  initialValue: number
  goal: number
  type: number
}

interface KeyResultCheckInData {
  id: string
  value: number
  createdAt: string
}
