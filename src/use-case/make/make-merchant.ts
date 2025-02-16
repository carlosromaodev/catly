import type { Comerciante } from '@prisma/client'

export interface makeMerchant {
  Update(date: Comerciante): Promise<Comerciante>
  FindMerchantId(id: string): Promise<Comerciante | null>
  FindMarchantEmail(email: string): Promise<Comerciante | null>
  ChangeName(id: string, newName: string): Promise<Comerciante>
  ChangePhone(id: string, newPhone: string): Promise<Comerciante>
  ChangeNif(id: string, newNif: string): Promise<Comerciante>
  ChangeEmail(id: string, newEmail: string): Promise<Comerciante>
  ChangeDescription(id: string, newDescription: string): Promise<Comerciante>




}

