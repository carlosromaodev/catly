import { DatabasePrismaUsuario } from '@/repository/in-Prisma/Bd-Prisma-Usuario'
import { userController } from '../controller-user'

export function FactoriesUser() {
  const DATABASE = new DatabasePrismaUsuario()
  const SUT = new userController(DATABASE)
  return SUT
}
