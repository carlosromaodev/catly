import { randomUUID } from 'node:crypto'
import { prisma } from '../../lib/connect-prisma'
import type { makeUsuario } from '../../use-case/make/make-Usuaro'
import type {
  fornecedor,
  makeFornecedor,
} from '../../use-case/make/make-fornecedor'
import {
  $Enums,
  type Fornecedor,
  type Prisma,
  type Usuario,
} from '@prisma/client'
import { DatabaseInMemoryUsuario } from './inMemory-Usuario'

export class DatabaseInMemoryFornecedor implements makeFornecedor {
  public DATABASE: Fornecedor[] = []

  async actualizar(data: Fornecedor) {
    const id = new DatabaseInMemoryUsuario().DATABASE.find(
      item => data.email === item.email
    )
    if (!id?.id) {
      throw new Error()
    }
    const novoFornecedor: Fornecedor = {
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
