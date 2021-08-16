export interface PersistenceAdapter {
  getManyFromNamedEntity<T>(indexes: Partial<T>, entityName: string): Promise<T[]>
}
