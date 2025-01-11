import { prisma } from '../../lib/connect-prisma'
import type { makeeCatalog } from '../../use-case/make/make-catalogo'
import type { makeeProduct } from '../../use-case/make/make-produtos'
import type { Catalogo } from '@prisma/client'

export class DatabasePrismaCatalogo implements makeeCatalog {
  async create(data: Catalogo): Promise<Catalogo> {
    const catalogo = await prisma.catalogo.create({ data })
    return catalogo
  }
}
