import { DatabasePrismaCatalogo } from '../../repository/in-Prisma/Bd-Prisma-Catalogo'
import { createCatalogo } from '../create-catalogo'

export function fatoriesCatalogo() {
  const DATABASE = new DatabasePrismaCatalogo()
  const SUT = new createCatalogo(DATABASE)
  return SUT
}
