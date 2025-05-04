import { randomUUID } from 'node:crypto'
import type { makeMerchant } from '@/use-case/utils/regulations/make/make-merchant'
import type { Merchant } from '@prisma/client'
import { UserError } from '../../use-case/error/error-user'
import { exibir } from '../../use-case/utils/exibir'

export class DatabaseInMemoryMerchant implements makeMerchant {
  public DATABASE: Merchant[] = []

  //*===================================== BANCO DE DADOS NA MEMORIA =====================================================

  //================ //* METODO USADO PARA CRIAR Merchant NO BANCO

  async Update(date: Merchant): Promise<Merchant> {
    const Merchant: Merchant = {
      userId: date.userId,
      id: randomUUID(),
      businessName: date.businessName,
      description: date.description,
      createdAt: date.createdAt,
      updatedAt: new Date(),
      email: date.email,
      phone: date.phone,
      nif: date.nif,
      bi: '',
      profileImage: null,
      coverImage: null,
      bank: null,
      ibanOfBank: null,
      numberBank: null,
      instagram: null,
      whatsapp: null,
      facebook: null,
      website: null,
      locationId: null,
      addressId: null,
      hoursOfOperation: null,
      isVerified: false,
      isActive: false,
    }

    this.DATABASE.push(Merchant)
    return Merchant
  }

  //================ //* METODO USADO PARA BUSCAR Merchant PELO ID

  async FindMerchantId(id: string): Promise<Merchant | null> {
    const Merchant = this.DATABASE.find(item => item.id === id)

    if (!Merchant) {
      return null
    }

    return Merchant
  }
  //================ //* METODO USADO PARA BUSCAR Merchant PELO NOME

  async FindMarchantName(name: string): Promise<Merchant | null> {
    const Merchant = this.DATABASE.find(item => item.businessName === name)

    if (!Merchant) {
      exibir.fatal('MERCHANT NÃO ENCONTRADO')
      return null
    }

    return Merchant
  }

  //================ //* METODO USADO PARA BUSCAR Merchant PELO EMAIL

  async FindMarchantEmail(email: string): Promise<Merchant | null> {
    const Merchant = this.DATABASE.find(item => item.email === email)

    if (!Merchant) {
      exibir.fatal('Merchant NÃO ENCONTRADO')
      return null
    }

    return Merchant
  }

  //================ //* METODO USADO PARA ALTERAR NOME DO Merchant

  async ChangeName(email: string, newName: string): Promise<Merchant> {
    // Busca o Merchant pela propriedade 'email'
    const merchant = this.DATABASE.find(item => item.email === email)
    if (!merchant) {
      throw new UserError('Erro a alterar o nome: Merchant não encontrado')
    }

    if (this.DATABASE.find(item => item.businessName === newName)) {
      throw new UserError('Erro na escolha do nome, nome indisponível')
    }

    merchant.businessName = newName
    return merchant
  }

  //================ //* METODO USADO PARA ALTERAR NUMERO DO Merchant

  async ChangePhone(email: string, newPhone: string): Promise<Merchant> {
    const newMerchant = this.DATABASE.find(item => item.email === email)

    if (!newMerchant) {
      throw new UserError('Erro a alterar o NUMERO')
    }

    newMerchant.phone = newPhone

    return newMerchant
  }

  //================ //* METODO USADO PARA ALTERAR NIF DO Merchant

  async ChangeNif(email: string, newNif: string): Promise<Merchant> {
    const newMerchant = this.DATABASE.find(item => item.email === email)

    if (!newMerchant) {
      throw new UserError('Erro a alterar o nif')
    }

    newMerchant.nif = newNif

    return newMerchant
  }
  //================ //* METODO USADO PARA ALTERAR EMAIL DO Merchant

  async ChangeEmail(email: string, newEmail: string): Promise<Merchant> {
    const newMerchant = this.DATABASE.find(item => item.email === email)

    if (!newMerchant) {
      throw new UserError('Erro a alterar o email')
    }

    newMerchant.email = newEmail

    return newMerchant
  }

  //================ //* METODO USADO PARA ALTERAR DESCRIÇÃO DO Merchant

  async ChangeDescription(
    email: string,
    newDescription: string
  ): Promise<Merchant> {
    const newMerchant = this.DATABASE.find(item => item.email === email)

    if (!newMerchant) {
      throw new UserError('Erro a alterar a descrição')
    }

    newMerchant.description = newDescription
    return newMerchant
  }

  //================ //* METODO USADO PARA ALTERAR USERID DO Merchant

  async ChangeUserId(email: string, newUserId: string): Promise<Merchant> {
    const merchant = this.DATABASE.find(item => item.email === email)
    if (!merchant) {
      throw new UserError('Erro a alterar o userId: Merchant não encontrado')
    }

    merchant.userId = newUserId
    return merchant
  }

  //================ //* METODO USADO PARA ALTERAR STATUS DO Merchant

  async ChangeStatus(email: string, newStatus: string): Promise<Merchant> {
    const merchant = this.DATABASE.find(item => item.email === email)
    if (!merchant) {
      throw new UserError('Erro a alterar o status: Merchant não encontrado')
    }

    merchant.isActive = newStatus === 'active'
    return merchant
  }

  //================ //* METODO USADO PARA ALTERAR ADDRESSID DO Merchant

  async ChangeAdderessId(
    email: string,
    newAdderessId: string
  ): Promise<Merchant> {
    const merchant = this.DATABASE.find(item => item.email === email)
    if (!merchant) {
      throw new UserError(
        'Erro a alterar o addressId: Merchant não encontrado'
      )
    }

    merchant.addressId = newAdderessId
    return merchant
  }

  //================ //* METODO USADO PARA DELETAR Merchant
  async Delete(email: string): Promise<Merchant> {
    const merchantIndex = this.DATABASE.findIndex(item => item.email === email)
    if (merchantIndex === -1) {
      throw new UserError('Erro a deletar: Merchant não encontrado')
    }

    const [deletedMerchant] = this.DATABASE.splice(merchantIndex, 1)
    return deletedMerchant
  }

  //================ //* METODO USADO PARA OBTER Merchant PELO EMAIL

  async GetMerchant(email: string): Promise<Merchant> {
    const merchant = this.DATABASE.find(item => item.email === email)
    if (!merchant) {
      throw new UserError('Erro a buscar: Merchant não encontrado')
    }

    return merchant
  }
}
