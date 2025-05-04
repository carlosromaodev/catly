import type { permission, Userpermission, Role } from '@prisma/client'


export interface OpctionPermission {
  create(date: Role): Promise<permission>
  defaultPermission(date: permission ): Promise<Userpermission>
  update(date: permission ): Promise<permission>
  outdate(date:permission): Promise<permission>
  delete(date:permission): Promise<permission>
  getPermission(date:permission): Promise<permission>
}
