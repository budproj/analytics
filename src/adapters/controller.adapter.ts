export interface ControllerAdapter {
  marshalResponse<T>(data: T): unknown
}
