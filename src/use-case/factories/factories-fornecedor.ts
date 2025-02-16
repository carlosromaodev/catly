import { DatabasePrismaUsuario } from '../../repository/in-Prisma/Bd-Prisma-Usuario'
import { DatabasePrismaFornecedor } from '../../repository/in-Prisma/Bd-Prismo-Fornecedor'
import { ForneceedorCreate } from '../controller-merchant'

export function FactoriesFornecedor() {
  const DATABASEUSUARIO = new DatabasePrismaUsuario()
  const DATABASEFORNECEDOR = new DatabasePrismaFornecedor()
  const SUT = new ForneceedorCreate(DATABASEUSUARIO, DATABASEFORNECEDOR)
  return SUT
}
