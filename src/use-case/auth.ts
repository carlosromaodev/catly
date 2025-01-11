import type { Usuario } from '@prisma/client'
import { compare, hash } from 'bcryptjs'
import bcrypt from 'bcryptjs'
import { ErrorAuth } from './error/erro-auth'
import type { makeUsuario } from './make/make-Usuaro'
import { exibir } from './utils/exibir'

interface RequestAuth {
  email: string
  senha: string
}

interface ResponseAuth {
  usuario: Usuario
}

export class useCaseAuth {
  constructor(private funcoes: makeUsuario) {}

  async login({ email, senha }: RequestAuth): Promise<ResponseAuth> {
    const usuario = await this.funcoes.ProcurarGmail(email)
    if (!usuario) {
      exibir.fatal(`USUARIO NAO ENCONTRADO: ${email}`)
      throw new Error('Usuário não encontrado')
    }
    const verif = await bcrypt.compare(senha, usuario.senha)

    if (!verif) {
      exibir.fatal(`SENHA INCORRETA PARA USUARIO: ${email}`)
      throw new Error('Senha incorreta')
    }

    exibir.info(
      `USUARIO LOGADO COM SUCESSO: ${usuario.nome} (${usuario.email})`
    )
    return { usuario }
  }
}
