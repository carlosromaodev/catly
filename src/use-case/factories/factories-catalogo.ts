import { createCatalogo } from '../create-catalogo'
import { DatabasePrismaCatalogo } from '../../repository/in-Prisma/Bd-Prisma-Catalogo'

export function fatoriesCatalogo() {
  const DATABASE = new DatabasePrismaCatalogo()
  const SUT = new createCatalogo(DATABASE)
  return SUT
}
