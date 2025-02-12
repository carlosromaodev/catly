import type { Comerciante, User } from '@prisma/client'
export interface User {
  email: string
  nome: string
  senha: string
  telefone: string
  id: string
}

export interface makeUser {

  Create(data: User): Promise<User>
  FindEmail(email: string): Promise<User | null>
  findId(id: string): Promise<User | null>
  ChangePassword(email: string, newPassword: string): Promise<User>
  ChangeName(email: string, newName: string): Promise<User>

}
