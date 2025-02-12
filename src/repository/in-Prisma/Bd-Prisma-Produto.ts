import type { Produto } from '@prisma/client'
import { prisma } from '../../lib/connect-prisma'
import type { makeeProduct } from '../../use-case/make/make-produtos'

export class DatabasePrismaFornecedor implements makeeProduct {
  async criarProduto(data: Produto): Promise<Produto> {
    const produto = await prisma.produto.create({ data })
    return produto
  }
}
