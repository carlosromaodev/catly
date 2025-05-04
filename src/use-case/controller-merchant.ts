import type { Merchant, User } from '@prisma/client'
import type { makeUser } from './utils/regulations/make/make-User'
import type { makeMerchant } from './utils/regulations/make/make-merchant'
import { exibir } from './utils/exibir'
import { UserError } from './error/error-user'
import { randomUUID } from 'node:crypto'


interface RequestUpdateToMerchant {
  user: User
  businessName: string
  phone: string
  nif: string
  description: string
  bi: string
  profileImage?: string
  coverImage?: string
  bank?: string
  ibanOfBank?: string
  numberBank?: string
  instagram?: string
  whatsapp?: string
  facebook?: string
  website?: string
  locationId: string
  addressId: string
  hoursOfOperation: string
  isVerified: true
  isActive: true
}

interface ResponseUpdateMerchant {
  merchant: Merchant | null
}

export class MerchantController {

  constructor(
    private functionUser: makeUser,
    private functionMerchant: makeMerchant
  ) {}

  async UpDateToMerchant(data: RequestUpdateToMerchant): Promise<ResponseUpdateMerchant> {
    const {email, id } = data.user

    if (!email || !id) {
      exibir.fatal('Email ou ID do usuário não fornecido')
      throw new UserError('Email ou ID do usuário não fornecido')
    }

    const merchant = await this.functionMerchant.Update({
      userId: id,
      email: email,
      businessName: data.businessName,
      phone: data.phone,
      nif: data.nif,
      description: data.description,
      bi: data.bi,
      profileImage: data.profileImage ?? null,
      coverImage: data.coverImage ?? null,
      bank: data.bank ?? null,
      ibanOfBank: data.ibanOfBank ?? null,
      numberBank: data.numberBank ?? null,
      instagram: data.instagram ?? null,
      whatsapp: data.whatsapp ?? null,
      facebook: data.facebook ?? null,
      website: data.website ?? null,
      locationId: data.locationId,
      addressId: data.addressId,
      hoursOfOperation: data.hoursOfOperation,
      isVerified: true,
      isActive: true,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return { merchant }
  }
  // ====================//* METODO PARA BUSCAR MERCHANT PELO O NOME

  async findMerchantnewname(businessName: string): Promise<ResponseUpdateMerchant>  {
    const merchant = await this.functionMerchant.FindMarchantName(businessName)

    if (!merchant) {
      exibir.info('Usuario não encontrado')
      throw new UserError('Merchant não encontrado')
    }

    return { merchant }
  }

  // ====================//* METODO PARA ALTERAR O NOME DO MERCHANT

  async ChangeNewName(email: string, newnewname: string): Promise<Merchant> {
    const existingMerchant =
      await this.functionMerchant.FindMarchantEmail(email)

    if (!existingMerchant) {
      exibir.fatal('Usuario não encontrado')
      throw new UserError('Usuario não encontrado')
    }

    const updatedMerchant = await this.functionMerchant.ChangeName(
      email,
      newnewname
    )
    if (!updatedMerchant) {
      exibir.fatal('Erro ao alterar o nome do Merchant')
      throw new UserError('Erro ao alterar o nome do Merchant')
    }
    exibir.info('Nome alterado com sucesso')
    exibir.info('Novo nome:', updatedMerchant.businessName)
    return updatedMerchant
  }

    // ====================//* METODO PARA ALTERAR O NUMERO DO MERCHANT

    async ChangeNUMBER(email: string, newNumber: string): Promise<Merchant> {
      const existingMerchant =
      await this.functionMerchant.FindMarchantEmail(email)
    
      if (!existingMerchant) {
      exibir.fatal('Usuario não encontrado')
      throw new UserError('Usuario não encontrado')
      }
    
      const updatedMerchant = await this.functionMerchant.ChangePhone(
      email,
      newNumber
      )
      if (!updatedMerchant) {
      exibir.fatal('Erro ao alterar o número do Merchant')
      throw new UserError('Erro ao alterar o número do Merchant')
      }
      exibir.info('Número alterado com sucesso')
      exibir.info('Novo número:', updatedMerchant.phone)
      return updatedMerchant
    }
  
  

 // ====================//* METODO PARA ALTERAR O NIF DO Merchant

  async changeNif(email: string, newNif: string): Promise<Merchant> {
    const findMerchant = await this.functionMerchant.FindMarchantEmail(email)
    if (!findMerchant) {
      exibir.fatal('Algo deu errado no processo de alteracao do NIF')
      throw new UserError('ALGO DEU ERRADO COM A ALTERACAO DO NIF')
    }
    const Merchant = await this.functionMerchant.ChangeNif(
      findMerchant.email,
      newNif
    )
    return Merchant
  }

   // ====================//* METODO PARA ALTERAR O DESCRIPTION DO Merchant

  async changeDescription(
    email: string,
    newDescription: string
  ): Promise<Merchant> {
    const findMerchant = await this.functionMerchant.FindMarchantEmail(email)
    if (!findMerchant) {
      exibir.fatal('Algo deu errado no processo de alteracao da Descricao')
      throw new UserError('ALGO DEU ERRADO COM A ALTERACAO DA DESCRICAO')
    }

    const Merchant = this.functionMerchant.ChangeDescription(
      email,
      newDescription
    )
    return Merchant
  }
}
