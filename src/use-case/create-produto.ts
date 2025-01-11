import type { Produto } from '@prisma/client'
import type { makeeProduct } from './make/make-produtos'
import { randomUUID } from 'node:crypto'

interface requestProduto {
  nome: string
  preco: number
  disponivel: 'DISPONIVEL' | 'INDISPONIVEL'
  quantidade: number
  fornecedorId: string
  catalogoId: string
}

interface ResponseProduto {
  produto: Produto
}

export class createCatalogo {
  constructor(private FuncoesCatalogo: makeeProduct) {}

  /**
   * @param data - RECEBE AS INFORMACOES DO PRODUTO
   * @returns - O RETORNO DOS DO PRODUTO
   */

  async createProduto(data: requestProduto): Promise<ResponseProduto> {
    const produto = await this.FuncoesCatalogo.criarProduto({
      id: randomUUID(),
      nome: data.nome,
      quantidade: data.quantidade,
      preco: data.preco,
      fornecedorId: data.fornecedorId,
      disponibilidade: data.disponivel,
      criadoEm: new Date(),
      atualizadoEm: new Date(),
      catalogoId: data.catalogoId,
    })

    return { produto }
  }
}
