import type { Catalogo, Produto } from '@prisma/client'

export interface makeeProduct {
  criarProduto(data: Produto): Promise<Produto>
}
