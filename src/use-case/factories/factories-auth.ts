import { DatabasePrismaUsuario } from '../../repository/in-Prisma/Bd-Prisma-Usuario'
import { useCaseAuth } from '../auth'

export function FactoriesAuth() {
  const DATABASE = new DatabasePrismaUsuario()
  const SUT = new useCaseAuth(DATABASE)
  return SUT
}
