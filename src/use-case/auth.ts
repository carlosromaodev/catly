import type { User } from '@prisma/client'
import { compare, hash } from 'bcryptjs'
import bcrypt from 'bcryptjs'
import { ErrorAuth } from './error/erro-auth'
import type { makeUser } from './utils/regulations/make/make-User'
import { exibir } from './utils/exibir'

interface RequestAuth {
  email: string
  password: string
}

interface ResponseAuth {
  usuario: User
}

export class useCaseAuth {
  constructor(private funcoes: makeUser) {}

  async login({ email, password }: RequestAuth): Promise<ResponseAuth> {
    const usuario = await this.funcoes.FindUserEmail(email)
    if (!usuario) {
      exibir.fatal(`USUARIO NAO ENCONTRADO: ${email}`)
      throw new Error('Usuário não encontrado')
    }
    const verif = await bcrypt.compare(password, usuario.password)

    if (!verif) {
      exibir.fatal(`password INCORRETA PARA USUARIO: ${email}`)
      throw new Error('password incorreta')
    }

    exibir.info(
      `USUARIO LOGADO COM SUCESSO: ${usuario.name} (${usuario.email})`
    )
    return { usuario }
  }
}
