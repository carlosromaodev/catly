import type { makeeCatalog } from '@/use-case/make/make-catalogo'
import type { Catalogo } from '@prisma/client';
import {DatabaseInMemoryUsuario} from '@/repository/in-Memory/inMemory-Usuario'
export class InMemoryCaralogo implements m     vbakeeCatalog {

  public  DATABASE: Catalogo[] = []
  
  async create(data: Catalogo): Promise<Catalogo> {
    const database = new DatabaseInMemoryUsuario()
    database.ProcurarGmail(data.)
    
    const catalogo = this.DATABASE.push()
    return catalogo

  }
  findId(usuarioId: string): Promise<Catalogo[]> | null {
    throw new Error('Method not implemented.');
  }
  findName(nome: string): Promise<Catalogo> | null {
    throw new Error('Method not implemented.');
  }
}
