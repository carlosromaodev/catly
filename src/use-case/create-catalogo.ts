import type { Catalogo } from '@prisma/client'
import type { makeeCatalog } from './make/make-catalogo'
import { exibir } from './utils/exibir'

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
  async findName({ nome }: requestCatalogo) {
    const catalogo = await this.FuncoesCatalogo.findId(nome)
    if (!catalogo) {
      throw new Error()
    }
    return catalogo
  }

  async createCatalog(data: requestCatalogo): Promise<Responsecatalogo> {
    const verificar = await this.FuncoesCatalogo.findName(data.nome)

    if (verificar) {
      exibir.fatal('NOME DO CATALOGO JA EXISTENTE')
      throw new Error('CATALOGO EXISTENTE')
    }

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

  async findId(id: string) {
    const catalogo = await this.FuncoesCatalogo.findId(id)

    if (!catalogo) {
      throw new Error()
    }
    return catalogo
  }
}
