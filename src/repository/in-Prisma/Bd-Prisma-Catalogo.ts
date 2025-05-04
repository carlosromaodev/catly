import { prisma } from '@/lib/connect-prisma'
import type { makeeCatalog } from '@/use-case/utils/regulations/make/make-catalogo'
import { exibir } from '@/use-case/utils/exibir'
import type { Catalogo } from '@prisma/client'

export class DatabasePrismaCatalogo implements makeeCatalog {
  async findName(nome: string): Promise<Catalogo> {
    const catalogo = await prisma.catalogo.findFirst({
      where: {
        nome,
      },
    })

    if (!catalogo) {
      exibir.info('CATALOGO NAO EXISTE NO BD')
    }
    return {
      catalogo,
    }
  }

  async findId(usuarioId: string): Promise<Catalogo[]> {
    const catalogo = await prisma.catalogo.findMany({
      where: {
        usuarioId,
      },
    })
    if (catalogo.length === 0) {
      throw new Error()
    }
    return catalogo
  }

  async create(data: Catalogo): Promise<Catalogo> {
    const catalogo = await prisma.catalogo.create({ data })
    return catalogo
  }
}
