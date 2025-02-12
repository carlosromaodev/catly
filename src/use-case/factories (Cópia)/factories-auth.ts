import { DatabaseInMemoryUsuario } from '../../repository/in-Memory/inMemory-Usuario'
import { useCaseAuth } from '../auth'

export function FactoriesAuth() {
  const DATABASE = new DatabasePrismaUsuario()
  const SUT = new useCaseAuth(DATABASE)
  return SUT
}
