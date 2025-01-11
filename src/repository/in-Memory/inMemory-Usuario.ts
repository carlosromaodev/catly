import { randomUUID } from 'node:crypto'
import type { makeUsuario } from '../../use-case/make/make-Usuaro'
import { $Enums, type Prisma, type Usuario } from '@prisma/client'
import { DatabaseInMemoryFornecedor } from './inMemory-Fornecedor'

export class DatabaseInMemoryUsuario implements makeUsuario {
  public DATABASE: Usuario[] = []

  async Criar(data: Usuario) {
    const id = new DatabaseInMemoryFornecedor().DATABASE.find(
      item => data.email === item.email
    )
    if (!id) {
      throw new Error()
    }

    const user: Usuario = {
      id: randomUUID(),
      email: 'cromao@gmail.com',
      nome: 'carlos romao',
      telefone: '940999794',
      senha: '1234Cr',
      role: $Enums.Role.USUARIO,
      criadoEm: new Date(),
      atualizadoEm: new Date(),
      fornecedorId: id?.id,
    }

    this.DATABASE.push(user)
    return user
  }

  async alterarSenha(email: string, novaSenha: string): Promise<Usuario> {
    const usuario = this.DATABASE.find(item => {
      if (item.email === email) {
        item.senha = novaSenha
      }
    })

    if (!usuario) {
      throw new Error()
    }

    return usuario
  }

  async ProcurarGmail(email: string): Promise<Usuario> {
    throw new Error('Method not implemented.')
  }
}
