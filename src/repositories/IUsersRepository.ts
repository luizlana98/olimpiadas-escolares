import { UserEntity } from 'src/entities/UserEntity'

export interface IUsersRepository {
  getUserById(id: string): Promise<UserEntity>
}
