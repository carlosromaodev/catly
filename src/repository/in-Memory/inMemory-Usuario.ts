import { randomUUID } from 'node:crypto'
import { $Enums, type Prisma, type Usuario } from '@prisma/client'
import type { makeUsuario } from '../../use-case/make/make-Usuaro'
import { DatabaseInMemoryFornecedor } from './inMemory-Fornecedor'
import { exibir } from '@/use-case/utils/exibir'

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
  async actualizarUsuario(email: string, fornecedorId: string): Promise<Usuario> {
    throw new Error('Method not implemented.')
  }

  async findId(id: string): Promise<Usuario | null> {
    const usuario = this.DATABASE.find(item => item.id === id)

    if (!usuario) {
      return null
    }
    return usuario
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

  async ProcurarGmail(email: string): Promise<Usuario | null > {
    const usuario = this.DATABASE.find(item => item.email === email)
    if(!usuario){
      return null
    }
    return usuario

  }
}
