import { describe, it, expect, beforeEach } from 'vitest'
import { DatabaseInMemoryMerchant } from '../repository/in-Memory/inMemory-Merchant'
import { DatabaseInMemoryUsuario } from '../repository/in-Memory/inMemory-Usuario'
import { MerchantController } from '../use-case/controller-merchant'
import { randomUUID } from 'node:crypto'
import { exibir } from './utils/exibir'

let DATABASE_MERCHANT: DatabaseInMemoryMerchant
let DATABASE_USER: DatabaseInMemoryUsuario
let sub: MerchantController

//======================================== TESTES UNITARIOS DO CONTROLLER MERCHANT =========================================

describe('TESTES CONTROLLER MERCHANT', () => {
  beforeEach(() => {
    DATABASE_MERCHANT = new DatabaseInMemoryMerchant()
    DATABASE_USER = new DatabaseInMemoryUsuario()
    sub = new MerchantController(DATABASE_USER, DATABASE_MERCHANT)
  })

  //============================================//* TESTANDO A CRIANÇÃO DO USUARIO

  it('TESTANDO A CRIAÇÃO DO COMERCIANTE', async () => {
    const user = await DATABASE_USER.Create({
      name: 'Mabelle Delgado',
      email: 'ojo@wura.ua',
      password: 'ra@offiff',
      phone: '940999843',
      CreateIn: new Date(),
      status: 'Explorador',
      id: randomUUID(),
      updateIn: new Date(),
      adderessid: null,
    })
  
    const merchant = await sub.UpDateToMerchant({
      businessName: 'Victor Williamson',
      user,
      description: 'telephone sure hide vast threw elephant stove hunt especially dead eleven film teeth rain chapter complex let organized yes entire studied subject heavy lake',
      nif: '5afzmslCgdN0uN47',
      phone: user.phone,
      bi: 'DY62R7UI6974576680501248',
      locationId: 'loc123',
      addressId: '286 Ripe Mill',
      hoursOfOperation: '9am-5pm',
      isVerified: true,
      isActive: true,
    
    })
    expect(merchant).toHaveProperty('merchant')
    expect(merchant.merchant).toHaveProperty('userId', user.id)
  })

  //==================================================//* BUSCAR COMERCIANTE PELO NAME

  it('TESTANDO A CRIAÇÃO DO COMERCIANTE', async () => {
    const user = await DATABASE_USER.Create({
      name: 'Mabelle Delgado',
      email: 'ojo@wura.ua',
      password: 'ra@offiff',
      phone: '940999843',
      CreateIn: new Date(),
      status: 'Explorador',
      id: randomUUID(),
      updateIn: new Date(),
      adderessid: null,
    })
  
    const merchant = await sub.UpDateToMerchant({
      businessName: 'Victor Williamson',
      user,
      description: 'telephone sure hide vast threw elephant stove hunt especially dead eleven film teeth rain chapter complex let organized yes entire studied subject heavy lake',
      nif: '5afzmslCgdN0uN47',
      phone: user.phone,
      bi: 'DY62R7UI6974576680501248',
      locationId: 'loc123',
      addressId: '286 Ripe Mill',
      hoursOfOperation: '9am-5pm',
      isVerified: true,
      isActive: true,
    })
if (!merchant) {
      throw new Error('Merchant não encontrado')
    }
    const findMerchant = await sub.findMerchantnewname('Victor Williamson')

    if (!findMerchant) {
      throw new Error('Merchant não encontrado')
    }
    expect(findMerchant.merchant?.businessName).toEqual('Victor Williamson')
  })

  //============================================//* ALTERACÃO DO NOME

  it('ALTERAR O NOME DO COMERCIANTE', async () => {
    const user = await DATABASE_USER.Create({
      name: 'Mabelle Delgado',
      email: 'ojo@wura.ua',
      password: 'ra@offiff',
      phone: '940999843',
      CreateIn: new Date(),
      status: 'Explorador',
      id: randomUUID(),
      updateIn: new Date(),
      adderessid: null,
    })
  
    const merchant = await sub.UpDateToMerchant({
      businessName: 'Victor Williamson',
      user,
      description: 'telephone sure hide vast threw elephant stove hunt especially dead eleven film teeth rain chapter complex let organized yes entire studied subject heavy lake',
      nif: '5afzmslCgdN0uN47',
      phone: user.phone,
      bi: 'DY62R7UI6974576680501248',
      locationId: 'loc123',
      addressId: '286 Ripe Mill',
      hoursOfOperation: '9am-5pm',
      isVerified: true,
      isActive: true,
    })

    if(!merchant.merchant?.email) {
      throw new Error('Merchant não encontrado')
    }
    const newName = 'jdnsdjcnsdlcnsdlijcdsn'

    const updatedMerchant = await sub.ChangeNewName(merchant.merchant?.email, newName)
    exibir.info('NOME DO COMERCIANTE ALTERADO COM SUCESSO')

    if (!updatedMerchant) {
      throw new Error('Merchant não encontrado')
    }
    expect(updatedMerchant.businessName).toEqual(newName)
  })
//============================================//* ALTERACÃO DO NIF

  it('TESTANDO A ALTERAÇÃO DE NIF DO COMERCIANTE', async () => {
    const user = await DATABASE_USER.Create({
      name: 'Mabelle Delgado',
      email: 'ojo@wura.ua',
      password: 'ra@offiff',
      phone: '940999843',
      CreateIn: new Date(),
      status: 'Explorador',
      id: randomUUID(),
      updateIn: new Date(),
      adderessid: null,
    })
  
    const merchant = await sub.UpDateToMerchant({
      businessName: 'Victor Williamson',
      user,
      description: 'telephone sure hide vast threw elephant stove hunt especially dead eleven film teeth rain chapter complex let organized yes entire studied subject heavy lake',
      nif: '5afzmslCgdN0uN47',
      phone: user.phone,
      bi: 'DY62R7UI6974576680501248',
      locationId: 'loc123',
      addressId: '286 Ripe Mill',
      hoursOfOperation: '9am-5pm',
      isVerified: true,
      isActive: true,
    })

    const newNif = 'carlosromao'

    if(!merchant.merchant?.email) {
      throw new Error('Merchant não encontrado')
    }
    const updatedMerchant = await sub.changeNif(merchant.merchant.email, newNif)
    expect(updatedMerchant.nif).toEqual(newNif)
  })

 //============================================//* ALTERACÃO DO NUMERO

  it('TESTANDO A ALTERAÇÃO DO NUMERO DO COMERCIANTE', async () => {

    const user = await DATABASE_USER.Create({
      name: 'Mabelle Delgado',
      email: 'ojo@wura.ua',
      password: 'ra@offiff',
      phone: '940999843',
      CreateIn: new Date(),
      status: 'Explorador',
      id: randomUUID(),
      updateIn: new Date(),
      adderessid: null,
    })
  
    const merchant = await sub.UpDateToMerchant({
      businessName: 'Victor Williamson',
      user,
      description: 'telephone sure hide vast threw elephant stove hunt especially dead eleven film teeth rain chapter complex let organized yes entire studied subject heavy lake',
      nif: '5afzmslCgdN0uN47',
      phone: user.phone,
      bi: 'DY62R7UI6974576680501248',
      locationId: 'loc123',
      addressId: '286 Ripe Mill',
      hoursOfOperation: '9am-5pm',
      isVerified: true,
      isActive: true,
    })

    const newNUmber = '937624785'

    if(!merchant.merchant?.email) {
      throw new Error('Merchant não encontrado')
    }

    const updatedMerchant = await sub.ChangeNUMBER(merchant.merchant?.email, newNUmber)
    if (!updatedMerchant) {
      throw new Error('Merchant não encontrado')
    }
    expect(updatedMerchant.phone).toEqual(newNUmber)
  })

   //============================================//* ALTERACÃO DA DESCRIPTION

  it('TESTANDO A ALTERAÇÃO DA DESCRIÇÃO DO COMERCIANTE', async () => {
    const user = await DATABASE_USER.Create({
      name: 'Mabelle Delgado',
      email: 'ojo@wura.ua',
      password: 'ra@offiff',
      phone: '940999843',
      CreateIn: new Date(),
      status: 'Explorador',
      id: randomUUID(),
      updateIn: new Date(),
      adderessid: null,
    })
  
    const merchant = await sub.UpDateToMerchant({
      businessName: 'Victor Williamson',
      user,
      description: 'telephone sure hide vast threw elephant stove hunt especially dead eleven film teeth rain chapter complex let organized yes entire studied subject heavy lake',
      nif: '5afzmslCgdN0uN47',
      phone: user.phone,
      bi: 'DY62R7UI6974576680501248',
      locationId: 'loc123',
      addressId: '286 Ripe Mill',
      hoursOfOperation: '9am-5pm',
      isVerified: true,
      isActive: true,
    })

    const newDescription = 'kjcndsjn jnkjfnj kfnvknjn nvfv fvfj'

    if(!merchant.merchant?.email) {
      throw new Error('Merchant não encontrado')
    }
    const updatedMerchant = await sub.changeDescription(
      merchant.merchant.email,
      newDescription
    )
    expect(updatedMerchant.description).toEqual(newDescription)
  })
})
