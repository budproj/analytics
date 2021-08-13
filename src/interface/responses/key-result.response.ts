export type ProgressHistoryResponse = ProgressRecord[]

interface ProgressRecord {
  id: string
  progress: number
  date: Date
}
