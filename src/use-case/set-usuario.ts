import type { makeUsuario } from './make/make-Usuaro'
import { exibir } from './utils/exibir'
import { Prisma, type Usuario } from '@prisma/client'
import { hash } from 'bcryptjs'
import type { makeFornecedor } from './make/make-fornecedor'
import { prisma } from '../lib/connect-prisma'

interface RequestUsuario {
  id: string
  nome: string
  email: string
  telefone: string
  senha: string
}

interface ResponseUsuario {
  usuario: Usuario
}

/**
 * Serviço para manipulação de usuários
 * @param date - Dados do usuário para criação
 * @returns - Objeto contendo o usuário criado
 */
export class FetchUsuario {
  constructor(
    private funcoes: makeUsuario,
    private funcoesFornecedor: makeFornecedor
  ) {}

  /**
   * Cria um novo usuário no banco de dados
   * @param date - Dados do usuário a ser criado
   * @returns - O usuário criado
   */
  async createUser(date: RequestUsuario): Promise<ResponseUsuario> {
    try {
      exibir.info(`Iniciando criação do usuário com email: ${date.email}`)

      // Verifica se o email já existe no banco de dados
      const userEmail = await this.funcoes.ProcurarGmail(date.email)
      if (userEmail) {
        exibir.fatal(
          `Tentativa de criar usuário com email já existente: ${date.email}`
        )
        throw new Error('Email já cadastrado.')
      }
      const senhaHash = await hash(date.senha, 6)
      const usuario = await this.funcoes.Criar({
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

  async findUser(email: string): Promise<ResponseUsuario> {
    const usuario = await this.funcoes.ProcurarGmail(email)
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

  async actualizarUser(email: string): Promise<ResponseUsuario> {
    const VerificarUsuario = await this.funcoes.ProcurarGmail(email)
    if (!VerificarUsuario) {
      throw new Error()
    }

    const idFornecedor =
      await this.funcoesFornecedor.procurarFornecedorEmail(email)
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
