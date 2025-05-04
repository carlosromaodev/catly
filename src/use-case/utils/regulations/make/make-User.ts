import type { User } from '@prisma/client'

export interface makeUser {

  Create(date: User): Promise<User>
  FindUserEmail(email: string): Promise<User | null>
  findUserId(id: string): Promise<User | null>
  ChangeUserPassword(email: string, newPassword: string): Promise<User>
  ChangeName(email: string, newName: string): Promise<User>

}
