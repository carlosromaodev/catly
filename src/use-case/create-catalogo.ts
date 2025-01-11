import type { Catalogo } from '@prisma/client'
import type { makeeCatalog } from './make/make-catalogo'

interface requestCatalogo {
  id: string
  nome: string
  usuarioId: string
  descricao: string
}

interface Responsecatalogo {
  catalogo: Catalogo
}

export class createCatalogo {
  constructor(private FuncoesCatalogo: makeeCatalog) {}

  /**
   * @param data - RECEBE AS INFORMACOES DO catalogo
   * @returns - O RETORNO DOS DO catalogo
   */

  async createCatalog(data: requestCatalogo): Promise<Responsecatalogo> {
    const catalogo = await this.FuncoesCatalogo.create({
      id: data.id,
      nome: data.nome,
      atualizadoEm: new Date(),
      criadoEm: new Date(),
      usuarioId: data.usuarioId,
      descricao: data.descricao,
    
    })

    return { catalogo }
  }
}
