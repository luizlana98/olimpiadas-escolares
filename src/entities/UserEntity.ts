import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: string

  @Column({ name: 'name', type: 'character varying' })
  name: string

  @Column({ name: 'email', type: 'character varying' })
  email: string

  @Column({ name: 'password', type: 'character varying' })
  password: string

  @Column({ name: 'validation_token', type: 'character varying' })
  validationToken: string

  @CreateDateColumn({ name: 'created_at', update: false })
  createdAt: Date

  @CreateDateColumn({ name: 'updated_at', update: true })
  updatedAt: Date
}
