import { createCatalogo } from '../create-produto'
import { DatabasePrismaFornecedor } from '../../repository/in-Prisma/Bd-Prisma-Produto'

export function factoriesProdutos() {
  const DATABASE = new DatabasePrismaFornecedor()
  const SUT = new createCatalogo(DATABASE)
  return SUT
}
