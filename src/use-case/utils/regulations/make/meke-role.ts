import type { Role } from '@prisma/client'

export interface  mekeRole{

  create(date: Role): Promise<Role>
  findId(id: string): Promise<Role | null>
  findName(name: string): Promise<Role | null>
  findDescription(description: string): Promise<Role | null>
  updateName(id: string, name: string): Promise<Role>
  updateDescription(id: string, description: string): Promise<Role>
  delete(id: string): Promise<Role>
  findAll(): Promise<Role[]>
  findAllName(name: string): Promise<Role[]>
  findAllDescription(description: string): Promise<Role[]>
  findAllId(id: string): Promise<Role[]>
  

}