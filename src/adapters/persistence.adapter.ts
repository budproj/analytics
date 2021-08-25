export interface PersistenceAdapter {
  getOneFromNamedEntity<T>(indexes: Partial<T>, entityName: string): Promise<T>
  getManyFromNamedEntity<T>(indexes: Partial<T>, entityName: string): Promise<T[]>
}
