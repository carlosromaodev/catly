import type { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { prisma } from '../lib/connect-prisma'
import type { makeUser } from './make/make-Usuaro'
import type { makeMerchant } from './make/make-fornecedor'
import { exibir } from './utils/exibir'

interface RequestUser {
  id: string
  nome: string
  email: string
  telefone: string
  senha: string
}

interface ResponseUser {
  usuario: User
}

/**
 * Coleta e manipulação de usuários
 * @param date - Dados do usuário para criação
 */

export class userController {
  constructor(
    private userFunction: makeUser,
    private merchantFunction: makeMerchant
  ) {}

  async createUser(date: RequestUser): Promise<ResponseUser> {
    try {
      exibir.info(`Iniciando criação do usuário com email: ${date.email}`)

      // [x] Verifica se o email já existe no banco de dados -----------------------------------------------------------

      const userEmail = await this.userFunction.ProcurarGmail(date.email)
      if (userEmail) {
        exibir.fatal(
          `Tentativa de criar usuário com email já existente: ${date.email}`
        )
        throw new Error('Email já cadastrado.')
      }
      const senhaHash = await hash(date.senha, 6)
      const usuario = await this.userFunction.Criar({
        email: date.email,
        nome: date.nome,
        senha: senhaHash,
        telefone: date.telefone,
        id: date.id,
      })

      exibir.info(
        `Usuário criado com sucesso: Nome=${usuario.nome}, Email=${usuario.email}`
      )

      return { usuario }
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      exibir.fatal('USUARIO NAO CRIADO')
      throw new Error(`Falha ao criar usuário: ${error.message || error}`)
    }
  }

  /**
   * Cria um novo usuário no banco de dados
   * @param date - Dados do usuário a ser criado
   * @returns - O usuário criado
   */

  async findUser(email: string): Promise<ResponseUser> {
    const usuario = await this.userFunction.ProcurarGmail(email)
    if (!usuario) {
      throw new Error()
    }
    return { usuario }
  }

  /**
   * Cria um novo usuário no banco de dados
   * @param date - Dados do usuário a ser criado
   * @returns - O usuário criado
   */

  async actualizarUser(email: string): Promise<ResponseUser> {
    const VerificarUsuario = await this.userFunction.ProcurarGmail(email)
    if (!VerificarUsuario) {
      throw new Error()
    }

    const idFornecedor =
      await this.merchantFunction.procurarFornecedorEmail(email)
    if (!idFornecedor) {
      throw new Error()
    }

    const id = idFornecedor.id

    const usuario = await prisma.usuario.update({
      where: {
        email,
      },
      data: {
        fornecedorId: id,
      },
    })
    return { usuario }
  }
}
