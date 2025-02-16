import { DatabasePrismaUsuario } from '../../repository/in-Prisma/Bd-Prisma-Usuario'
import { FetchUsuario } from '../controller-user'

export function FactoriesUser() {
  const DATABASE = new DatabasePrismaUsuario()
  const SUT = new FetchUsuario(DATABASE)
  return SUT
}
