import type { Criador } from '@prisma/client'

export interface mekeCreator {
  Update(date: Criador): Promise<Criador>
  FindCreatorId(id: string): Promise<Criador | null>
  FindCreatorEmail(email: string): Promise<Criador | null>
  FindCreatorName(name: string): Promise<Criador | null>
  ChangeName(name: string, newName: string): Promise<Criador>
  ChangePhone(email: string, newPhone: string): Promise<Criador>
  ChangeNif(email: string, newNif: string): Promise<Criador>
  ChangeEmail(email: string, newEmail: string): Promise<Criador>
  ChangeDescription(email: string, newDescription: string): Promise<Criador>
}
