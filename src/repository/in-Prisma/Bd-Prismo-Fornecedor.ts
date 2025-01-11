import { prisma } from '../../lib/connect-prisma'
import type { makeFornecedor } from '../../use-case/make/make-fornecedor'
import type { Fornecedor } from '@prisma/client'

export class DatabasePrismaFornecedor implements makeFornecedor {
  async procurarFornecedorEmail(email: string): Promise<Fornecedor | null> {
    const fornecedor = await prisma.fornecedor.findUnique({
      where: { email },
    })
    return fornecedor
  }

  async procurarFornecedorId(id: string): Promise<Fornecedor | null> {
    const fornecedor = await prisma.fornecedor.findUnique({
      where: { id },
    })
    return fornecedor
  }

  async actualizar(data: Fornecedor): Promise<Fornecedor> {
    const fornecedor = prisma.fornecedor.create({
      data,
    })
    return fornecedor
  }
}
