import { DatabasePrismaFornecedor } from '../../repository/in-Prisma/Bd-Prisma-Produto'
import { createCatalogo } from '../create-produto'

export function factoriesProdutos() {
  const DATABASE = new DatabasePrismaFornecedor()
  const SUT = new createCatalogo(DATABASE)
  return SUT
}
