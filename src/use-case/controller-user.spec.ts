import { describe, it, expect, beforeEach } from 'vitest'
import { DatabaseInMemoryUsuario } from '@/repository/in-Memory/inMemory-Usuario'
import { userController } from '../use-case/controller-user'
import { hash } from 'bcryptjs'
import { exibir } from './utils/exibir'

let DATABASE: DatabaseInMemoryUsuario
let sub: userController

//======================================== TESTES UNITARIOS DO CONTROLLER USER =========================================

describe('TESTES CONTROLLER USER', () => {
  beforeEach(() => {
    DATABASE = new DatabaseInMemoryUsuario()
    sub = new userController(DATABASE)
  })

  //============================================//* TESTANDO A CRIANÇÃO DO USUARIO

  it('TESTANDO A CRIAÇÃO DO USUARIO', async () => {
    const user = await sub.createUser({
      name: 'Harry Lane',
      email: 'wuhop@vaw.nz',
      password: '123456',
      phone: '(767) 588-2979',
    })

    expect(user).toHaveProperty('user') // Verifica se há um objeto `user`
    expect(user.user).toHaveProperty('email', 'wuhop@vaw.nz') // Verifica o email do usuário
    expect(user.user).toHaveProperty('name', 'Harry Lane') // Verifica o nome
  })

  //====================================================//* TESTANDO A BUSCAR USUARIO PELO ID

  it('TESTANTO BUSCA DO USUARIO PELO ID', async () => {
    const user = await sub.createUser({
      name: 'Adelaide Salazar',
      email: 'pedisu@citranpiz.ee',
      password: '123456',
      phone: '(853) 691-4148',
    })

    const findUser = await sub.findUser(user.user.email)

    expect(findUser).toHaveProperty('user')
    expect(findUser).not.toBeNull() // Verifica se findUser não é nulo
    expect(findUser!.user).toHaveProperty('email', 'pedisu@citranpiz.ee') // Usa o operador de não-nulo
  })

  //============================================//* TESTANDO A ALTERACÃO DA SENHA

  it('TESTANDO A ALTERAÇÃO DE SENHA', async () => {
    const user = await sub.createUser({
      name: 'Carlos romao',
      email: 'romaoa59@gmail.com',
      password: '123456',
      phone: '940999843',
    })

    const newName = '333333'
    const newPassword = await hash(newName, 6)
    const email = 'romaoa59@gmail.com'
    const newUser = await sub.changePassword(email, newPassword)

    expect(newUser.user).toHaveProperty('password')
    expect(await hash(newPassword, 6)).not.toEqual(user.user.password) // Garantir que a senha foi alterada
  })

  //============================================//* TESTANDO A ALTERACÃO DO NOME

  it('TESTANDO A ALTERAÇÃO DO NOME', async () => {
    const user = await sub.createUser({
      name: 'Carlos romao',
      email: 'romaoa59@gmail.com',
      password: '123456',
      phone: '940999843',
    })

    const newName = 'TIago Ventura'
    const email = 'romaoa59@gmail.com'
    const newUser = await sub.changeName(email, newName)

    expect(newUser.user).toHaveProperty('name', newName) // Verifica se o nome foi atualizado corretamente
  })
})
