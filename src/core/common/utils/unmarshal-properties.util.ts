import { Entity } from '../domain/base.entity'
import { ValueObject } from '../domain/value-objects/base.value-object'

function isEntity(object: unknown): object is Entity<any, any> {
  return (
    Object.prototype.hasOwnProperty.call(object, 'toObject') &&
    Object.prototype.hasOwnProperty.call(object, 'id') &&
    ValueObject.isValueObject((object as Entity<any, any>).id)
  )
}

function convertToRaw(item: any): any {
  if (ValueObject.isValueObject(item)) {
    return item.getRawProps()
  }

  if (isEntity(item)) {
    return item.toObject()
  }

  return item
}

export function unmarshalProperties<T>(properties: any): T {
  const propertiesCopy = { ...properties }

  // eslint-disable-next-line guard-for-in
  for (const property in propertiesCopy) {
    if (Array.isArray(propertiesCopy[property])) {
      propertiesCopy[property] = (propertiesCopy[property] as unknown[]).map((item) => {
        return convertToRaw(item)
      })
    }

    propertiesCopy[property] = convertToRaw(propertiesCopy[property])
  }

  return propertiesCopy
}
