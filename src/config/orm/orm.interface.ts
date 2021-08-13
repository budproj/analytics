import { NamingStrategyInterface } from 'typeorm'

export interface ORMConfigInterface {
  type: string
  endpoint: ORMEndpointConfigInterface
  authentication: ORMAuthenticationConfigInterface
  pattern: ORMPatternConfigInterface
  logging: ORMLoggingConfigInterface
  conventions: ORMConventionsConfigInterface
}

export interface ORMEndpointConfigInterface {
  host: string
  port: number
  database: string
}

export interface ORMAuthenticationConfigInterface {
  user?: string
  password?: string
}

export interface ORMPatternConfigInterface {
  file: ORMFilePatternConfigInterface
  directory: ORMDirectoryPatternConfigInterface
}

interface ORMFilePatternConfigInterface {
  entities: string[]
  migrations: string[]
}

interface ORMDirectoryPatternConfigInterface {
  migrations: string
}

export interface ORMLoggingConfigInterface {
  enabled: boolean
}

export interface ORMConventionsConfigInterface {
  naming?: NamingStrategyInterface
}
