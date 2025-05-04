import type { OpctionPermission } from '@/use-case/utils/regulations/make/makepermission'
import type { Userpermission } from '@prisma/client'

interface RequestPermission {
  id: string
  UserId: string
  permissionId: string
}

interface ResponsePermiss                                                                                                    ion {
  userPermission: Userpermission
}

export class PermissionUser {
  constructor(private readonly permission: OpctionPermission) {}

  async createPermission(
    request: RequestPermission
  ): Promise<ResponsePermission> {
    const permission = await this.permission.create({
      id: request.id,
      UserId: request.UserId,
      permissionId: request.permissionId,
    })
    return { userPermission: {} as Userpermission }
  }
}
