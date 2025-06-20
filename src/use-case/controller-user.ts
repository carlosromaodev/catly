import type { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import type { makeUser } from './utils/regulations/make/make-User'
import { exibir } from './utils/exibir'
import { randomUUID, type UUID } from 'node:crypto'
import { UserError } from '../use-case/error/error-user'

interface RequestUser {
  name: string
  email: string
  phone: string
  password: string
}

interface ResponseUser {
  user: User
}

/**
 * Coleta e manipulação de usuários
 * @param date - Dados do usuário para criação
 */

export class userController {
  constructor(private userFunction: makeUser) {}

  //*========================================== CONTROLLER USER =========================================================

  // ====================//* METODO PARA CRIAR USUARIO

  async createUser(date: RequestUser): Promise<ResponseUser> {
    try {
      const userEmail = await this.userFunction.FindUserEmail(date.email)

      if (userEmail) {
        exibir.fatal(`Usuário já existente: ${date.email}`)
        throw new UserError('Email já cadastrado.')
      }

      const passwordHash = await hash(date.password, 6)

      const user: User = await this.userFunction.Create({
        email: date.email,
        name: date.name,
        password: passwordHash,
        phone: date.phone,
        id: randomUUID(),
        CreateIn: new Date(),
        updateIn: new Date(),
        adderessid: null,
        status: 'Explorador',
      })

      exibir.info('USUARIO CRIANDO COM SUCESSO')

      return { user }
    } catch (err) {
      exibir.fatal('Falha ao criar o usuario')
      throw new UserError('Falha ao criar usuário')
    }
  }

  // ====================//* METODO PARA BUSCAR O USUARIO PELO ID

  async findUser(email: string): Promise<ResponseUser | null> {
    const user = await this.userFunction.FindUserEmail(email)
    if (!user) {
      exibir.info('Usuario não encontrado')
      throw new UserError('Usuario não encontrado')
    }
    return { user }
  }

  // ====================//* METODO PARA ALTERAR A SENHA DO USUARIO

  async changePassword(
    emailUser: string,
    newpassword: string
  ): Promise<ResponseUser> {
    const usuario = await this.userFunction.FindUserEmail(emailUser)

    if (!usuario) {
      exibir.fatal('Erro a trocar a Senha, usuario nao encontrado')
      console.log('Erro a trocar a Senha, usuario nao encontrado')
      throw new UserError('Erro ao Trocar a Senha, usuario nao encontrado')
    }

    const email = usuario.email
    const newPassword = await hash(newpassword, 6)

    const user = await this.userFunction.ChangeUserPassword(email, newPassword)
    if (!user) {
      exibir.fatal('Erro a trocar a Senha')
      throw new UserError('Erro ao Trocar a Senha')
    }

    return { user }
  }

  // ====================//* METODO PARA ALTERAR O NOME DO USUARIO

  async changeName(emailUser: string, newName: string): Promise<ResponseUser> {
    const usuario = await this.userFunction.FindUserEmail(emailUser)

    if (!usuario) {
      exibir.fatal('Erro a trocar a Senha, usuario nao encontrado')
      throw new UserError('Erro ao Trocar a Senha, usuario nao encontrado')
    }

    const email = usuario.email

    const user = await this.userFunction.ChangeName(email, newName)
    if (!user) {
      exibir.fatal('Erro a trocar o nome')
      throw new UserError('Erro ao Trocar o nome')
    }

    return { user }
  }
}
