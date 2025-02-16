import { randomUUID } from 'node:crypto'
import type { makeMerchant } from '@/use-case/make/make-merchant'
import type { Comerciante } from '@prisma/client'
import { DatabaseInMemoryUsuario } from './inMemory-Usuario'
import { UserError } from '../../use-case/error/error-user'
import { exibir } from '@/use-case/utils/exibir'

export class DatabaseInMemoryComerciante implements makeMerchant {

  public DATABASE: Comerciante[] = []

  //*===================================== BANCO DE DADOS NA MEMORIA =====================================================

  //================ //* METODO USADO PARA CRIAR COMERCIANTE NO BANCO

  async Update(date: Comerciante): Promise<Comerciante> {
    const database = new DatabaseInMemoryUsuario()
    const idUser = await database.FindEmail(date.email)

    if (!idUser) {
      throw new UserError('Erro ao efectuar o update')
    }

    const comerciante: Comerciante = {
      UserId: idUser.id,
      id: randomUUID(),
      nomeNegocio: date.nomeNegocio,
      description: date.description,
      CreateIn: date.CreateIn,
      updateIn: new Date(),
      email: date.email,
      phone: date.phone,
      nif: date.nif,
    }

    this.DATABASE.push(comerciante)
    return comerciante
  }

  //================ //* METODO USADO PARA BUSCAR COMERCIANTE PELO ID

  async FindMerchantId(id: string): Promise<Comerciante | null> {
    const Comerciante = this.DATABASE.find(item => item.id === id)

    if (!Comerciante) {
      exibir.fatal('COMERCIANTE NÃO ENCONTRADO')
      return null
    }

    return Comerciante
  }

  //================ //* METODO USADO PARA BUSCAR COMERCIANTE PELO EMAIL

  async FindMarchantEmail(email: string): Promise<Comerciante | null> {
    const Comerciante = this.DATABASE.find(item => item.email === email)

    if (!Comerciante) {
      exibir.fatal('COMERCIANTE NÃO ENCONTRADO')
      return null
    }

    return Comerciante
  }

  //================ //* METODO USADO PARA ALTERAR NOME DO COMERCIANTE

  async ChangeName(id: string, newName:string): Promise<Comerciante> {
    const newMerchant = this.DATABASE.find((item) => item.id === id )

    if(!newMerchant) {
      throw new UserError('Erro a alterar o nome')
    }

    newMerchant.nomeNegocio = newName

    return newMerchant

  }

    //================ //* METODO USADO PARA ALTERAR NUMERO DO COMERCIANTE

  async ChangePhone(id: string, newPhone: string): Promise<Comerciante> {
    const newMerchant = this.DATABASE.find((item) => item.id === id )

    if(!newMerchant) {
      throw new UserError('Erro a alterar o NUMERO')
    }

    newMerchant.phone = newPhone

    return newMerchant

  }

      //================ //* METODO USADO PARA ALTERAR NIF DO COMERCIANTE

  async ChangeNif(id: string, newNif: string): Promise<Comerciante> {
    const newMerchant = this.DATABASE.find((item) => item.id === id )

    if(!newMerchant) {
      throw new UserError('Erro a alterar o nif')
    }

    newMerchant.nif = newNif

    return newMerchant

  }

      //================ //* METODO USADO PARA ALTERAR EMAIL DO COMERCIANTE

  async ChangeEmail(id: string, newEmail: string): Promise<Comerciante> {
    const newMerchant = this.DATABASE.find((item) => item.id === id )

    if(!newMerchant) {
      throw new UserError('Erro a alterar o email')
    }

    newMerchant.email = newEmail

    return newMerchant

  }

      //================ //* METODO USADO PARA ALTERAR DESCRIÇÃO DO COMERCIANTE

  async ChangeDescription(id: string, newDescription: string): Promise<Comerciante> {
    const newMerchant = this.DATABASE.find((item) => item.id === id )

    if(!newMerchant) {
      throw new UserError('Erro a alterar a descrição')
    }

    newMerchant.description = newDescription
    return newMerchant

  }

}
