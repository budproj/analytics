import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { ORMEntityInterface } from '../interfaces/base.interface'

export abstract class ORMEntity implements ORMEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
