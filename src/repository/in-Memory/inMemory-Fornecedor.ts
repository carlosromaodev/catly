import { randomUUID } from 'node:crypto'
import { prisma } from '@/lib/connect-prisma'
import type { makeUsuario } from '@/use-case/make/make-Usuaro'
import type { makeFornecedor } from '@/use-case/make/make-fornecedor'
import type { Fornecedor } from '@prisma/client'
import { DatabaseInMemoryUsuario } from './inMemory-Usuario'

export class DatabaseInMemoryFornecedor implements makeFornecedor {
  public DATABASE: Fornecedor[] = []

  async procurarFornecedorId(id: string): Promise<Fornecedor | null> {
    const fornecedor = this.DATABASE.find(valor => id)

    if (!fornecedor) {
      throw new Error()
    }
    return fornecedor
  }

  async procurarFornecedorEmail(email: string): Promise<Fornecedor | null> {}

  async actualizar(data: Fornecedor) {
    const id = new DatabaseInMemoryUsuario().DATABASE.find(
      item => data.email === item.email
    )
    if (!id?.id) {
      throw new Error()
    }
    const novoFornecedor = {
      email: data.email,
      nif: data.nif,
      nomeNegocio: data.nomeNegocio,
      telefone: data.telefone,
      usuarioId: id.id, // Relacionamento com usuário
      criadoEm: new Date(),
      atualizadoEm: new Date(),
      id: randomUUID(),
    }
    this.DATABASE.push(novoFornecedor)
    return novoFornecedor
  }

  async criar(data: fornecedor) {
    const fornecedor = this.DATABASE.push({ data })
    return { fornecedor }
  }
}
