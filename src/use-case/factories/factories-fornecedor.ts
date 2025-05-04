import { DatabaseInMemoryMerchant } from '@/repository/in-Memory/inMemory-Merchant'
import {DatabaseInMemoryUsuario} from '@/repository/in-Memory/inMemory-Usuario'
import { MerchantController } from '@/use-case/controller-merchant'

export function FactoriesFornecedor() {
  const DATABASEFORNECEDOR = new DatabaseInMemoryMerchant()
  const DATABASEUSER = new DatabaseInMemoryUsuario()

  const SUT = new MerchantController( DATABASEUSER, DATABASEFORNECEDOR) 
  return SUT
}
