import type { Role } from '@prisma/client'
import type { mekeRole } from '@/use-case/utils/regulations/make/meke-role'
import { exibir } from '../exibir'
import { RoleError } from '@/use-case/error/error-role'

interface RequestRole {
  id: string
  name: string
  description: string
}

interface ResponseRole {
  role: Role
}

export class role {
  constructor(private roleFunction: mekeRole) {}

  //*======================================== Create Role =============================================

  async createRole(date: RequestRole): Promise<ResponseRole> {
    const role = await this.roleFunction.create({
      id: date.id,
      name: date.name,
      description: date.description,
      roleUser: 'EXPLORADOR',
    })

    if (!role) {
      exibir.fatal('Erro ao criar o papel')
      throw new RoleError('Erro a aplicar permissao')
    }
    return { role }
  }
}
