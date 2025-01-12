import { prisma } from '@/lib/connect-prisma'
import type { makeeCatalog } from '@/use-case/make/make-catalogo'
import type { Catalogo } from '@prisma/client'

export class DatabasePrismaCatalogo implements makeeCatalog {

  async findId(usuarioId: string): Promise<Catalogo[]> {
    const catalogo = await prisma.catalogo.findMany({
      where : {
        usuarioId,
      }
    })
    if(catalogo.length === 0 ){
      throw new Error()
    }
    return catalogo
    
  }

  async create(data: Catalogo): Promise<Catalogo> {
    const catalogo = await prisma.catalogo.create({ data })
    return catalogo
  }
}
