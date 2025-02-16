import type { User } from '@prisma/client'

export interface makeUser {

  Create(date: User): Promise<User>
  FindEmail(email: string): Promise<User | null>
  findId(id: string): Promise<User | null>
  ChangePassword(email: string, newPassword: string): Promise<User>
  ChangeName(email: string, newName: string): Promise<User>

}
