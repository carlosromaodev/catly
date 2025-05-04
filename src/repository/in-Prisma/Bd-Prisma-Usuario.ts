import type { Prisma, User } from '@prisma/client'
import { prisma } from '../../lib/connect-prisma'
import { FactoriesFornecedor } from '../../use-case/factories/factories-fornecedor'
import type { makeUser } from '../../use-case/utils/regulations/make/make-User'

export class DatabasePrismaUsuario implements makeUser {
  async findUserId(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return user
  }

  async Create(data: User): Promise<User> {
    try {
      const user = await prisma.user.create({ data })
      return user
    } catch (error) {
      throw new Error(
        `Erro ao criar usuário no banco: ${(error as Error).message}`
      )
    }
  }

  async FindUserEmail(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      })
      return user
    } catch (error) {
      throw new Error(`Erro ao procurar e-mail: ${(error as Error).message}`)
    }
  }

  async ChangeUserPassword(email: string, newPassword: string): Promise<User> {
    try {
      const user = await prisma.user.update({
        where: { email },
        data: { password: newPassword },
      })
      return user
    } catch (error) {
      throw new Error(`Erro ao alterar senha: ${(error as Error).message}`)
    }
  }

  async ChangeName(email: string, newName: string): Promise<User> {
    try {
      const user = await prisma.user.update({
        where: { email },
        data: { name: newName },
      })
      return user
    } catch (error) {
      throw new Error(`Erro ao alterar nome: ${(error as Error).message}`)
    }
  }
}
