import type { Comerciante } from '@prisma/client'
import type { makeUser } from './make/make-User'
import type { makeMerchant } from './make/make-merchant'
import { exibir } from './utils/exibir'
import { randomUUID } from 'node:crypto'

export interface RequestMerchant {
  email: string
  businessName: string
  userId: string
  phone: string
  nif: string
  description: string
}

export interface ResponseMerchant {
  fornecedor: Comerciante
}

/**
 * @param date - DADOS PARA ACTUALIZAR O MERCHANT
 * @returns - RETORNO DO FORNECEDOR
 */

// ============================================== CONTROLLER USER ======================================================

export class controllerMerchant {
  constructor(
    private functionUser: makeUser,
    private functionMerchant: makeMerchant
  ) {}

  async update(date: RequestMerchant): Promise<ResponseMerchant> {
    const user = await this.functionUser.FindEmail(date.email)

    if (!user?.id) {
      exibir.fatal('user não existe')
      throw new Error()
    }

    const merchant = await this.update({
      userId: user.id,
      businessName: date.businessName,
      description: date.description,
      email: date.email,
      nif: date.nif,
      phone: date.phone,
    })
    return merchant
  }
}
