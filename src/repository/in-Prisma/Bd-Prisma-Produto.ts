import { prisma } from '../../lib/connect-prisma'
import type { makeeProduct } from '../../use-case/make/make-produtos'
import type { Produto } from '@prisma/client'

export class DatabasePrismaFornecedor implements makeeProduct {
  async criarProduto(data: Produto): Promise<Produto> {
    const produto = await prisma.produto.create({ data })
    return produto
  }
}
