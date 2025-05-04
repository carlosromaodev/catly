import { randomUUID } from 'node:crypto'
import type { makeUser } from '../../use-case/utils/regulations/make/make-User'
import { exibir } from '../../use-case/utils/exibir'
import type { User } from '.prisma/client'
import { UserError } from '../../use-case/error/error-user'

export class DatabaseInMemoryUsuario implements makeUser {
  public DATABASE: User[] = []

  //*===================================== BANCO DE DADOS NA MEMORIA =====================================================

  //================ //* METODO USADO PARA CRIAR USUARIO NO BANCO
  async Create(date: User): Promise<User> {
    const newUser: User = {
      id: randomUUID(),
      name: date.name,
      password: date.password,
      email: date.email,
      phone: date.phone,
      updateIn: new Date(),
      CreateIn: new Date(),
      status: 'Explorador',
      adderessid: null,
    }

    if (!newUser) {
      exibir.fatal('Erro ao criar usuario (INMEMORY)')
      throw new UserError('erro no login')
    }

    this.DATABASE.push(newUser)

    return newUser
  }

  //================ //* METODO USADO PARA BUSCAR USUARIO PELO EMAIL

  async FindUserEmail(email: string): Promise<User | null> {
    const User = this.DATABASE.find(item => item.email === email)

    if (!User) {
      exibir.fatal('Erro ao criar usuario')
      return null
    }

    return User
  }

  //================ //* METODO USADO PARA BUSCAR USUARIO PELO ID

  async findUserId(id: string): Promise<User | null> {
    const User = this.DATABASE.find(item => item.id === id)

    if (!User) {
      exibir.fatal('Erro ao criar usuario')
      return null
    }

    return User
  }

  //================ //* METODO USADO PARA ALTERAR A SENHA DO USUARIO

  async ChangeUserPassword(email: string, newPassword: string): Promise<User> {
    const User = this.DATABASE.find(item => item.email === email)

    if (!User) {
      exibir.fatal('Erro ao Trocar a Senha, usuario não encontrado ')
      throw new UserError('erro no login')
    }
    User.password = newPassword
    return User
  }
  //================ //* METODO USADO PARA ALTERAR O NOME DO USUARIO

  async ChangeName(email: string, newName: string): Promise<User> {
    const User = this.DATABASE.find(item => item.email === email)

    if (!User) {
      exibir.fatal('Erro ao Trocar a Senha, usuario não encontrado ')
      throw new UserError('erro no login')
    }
    User.name = newName
    return User
  }
}
