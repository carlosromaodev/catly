import { mekeCreator } from '@/use-case/utils/regulations/make/meke-creator'
import type { Criador } from '@prisma/client'

interface RequestCreator {
  id: string
  email: string
  phone: string
  description: string
  UserId: string
  CreateIn: Date
  updateIn: Date
  nif: string
  perfileName: string
  locationid: string | null
  adderessid: string | null
}
