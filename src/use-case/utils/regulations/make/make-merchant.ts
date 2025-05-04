import type { Merchant } from '@prisma/client'

export interface makeMerchant {
  Update(date: Merchant): Promise<Merchant>
  FindMerchantId(id: string): Promise<Merchant | null>
  FindMarchantEmail(email: string): Promise<Merchant | null>
  FindMarchantName(name: string): Promise<Merchant | null>
  ChangeName(name: string, newName: string): Promise<Merchant>
  ChangePhone(email: string, newPhone: string): Promise<Merchant>
  ChangeNif(email: string, newNif: string): Promise<Merchant>
  ChangeEmail(email: string, newEmail: string): Promise<Merchant>
  ChangeDescription(email: string, newDescription: string): Promise<Merchant>
  ChangeUserId(email: string, newUserId: string): Promise<Merchant>
  ChangeStatus(email: string, newStatus: string): Promise<Merchant>
  ChangeAdderessId(email: string, newAdderessId: string): Promise<Merchant>
  Delete(email: string): Promise<Merchant>
  GetMerchant(email: string): Promise<Merchant>
}

