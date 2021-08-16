export interface PersistenceAdapter<T> {
  getManyFromNamedEntity(indexes: Partial<T>, entityName: string): Promise<T[]>
}
