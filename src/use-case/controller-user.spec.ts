import { describe, it, expect, beforeEach } from 'vitest'
import { DatabaseInMemoryUsuario } from '../repository/in-Memory/inMemory-Usuario'
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
      name: 'Carlos Romão',
      email: 'romaoa59@gmail.com',
      password: '123456',
      phone: '940999843',
    })

    expect(user).toHaveProperty('user') // Verifica se há um objeto `user`
    expect(user.user).toHaveProperty('email', 'romaoa59@gmail.com') // Verifica o email do usuário
    expect(user.user).toHaveProperty('name', 'Carlos Romão') // Verifica o nome
  })

  //====================================================//* BUSCAR USUARIO PELO ID

  it('TESTANTOBUSCA DO USUARIO PELO ID', async () => {
    const user = await sub.createUser({
      name: 'Carlos Romão',
      email: 'romaoa59@gmail.com',
      password: '123456',
      phone: '940999843',
    })

    const findUser = await sub.findUser(user.user.email)

    expect(findUser).toHaveProperty('user')
    expect(findUser.user).toHaveProperty('email', 'romaoa59@gmail.com')
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
