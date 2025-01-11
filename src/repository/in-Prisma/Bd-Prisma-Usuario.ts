import { prisma } from '../../lib/connect-prisma'
import { FactoriesFornecedor } from '../../use-case/factories/factories-fornecedor'
import type { makeUsuario } from '../../use-case/make/make-Usuaro'
import type { Prisma, Usuario } from '@prisma/client'

export class DatabasePrismaUsuario implements makeUsuario {
  async actualizarUsuario(email: string): Promise<Usuario> {
    const fornecedor = FactoriesFornecedor().findFornecedorEmail(email)
    const usuarioAtualizado = await prisma.usuario.update({
      where: { email },
      data: { fornecedorId: (await fornecedor).fornecedor.id },
    })
    return usuarioAtualizado
  }

  async findId(id: string): Promise<Usuario | null> {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
    })
    return usuario
  }
  async Criar(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    try {
      const usuario = await prisma.usuario.create({ data })
      return usuario
    } catch (error) {
      throw new Error(
        `Erro ao criar usuário no banco: ${(error as Error).message}`
      )
    }
  }

  async ProcurarGmail(email: string): Promise<Usuario | null> {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { email },
      })
      return usuario
    } catch (error) {
      throw new Error(`Erro ao procurar e-mail: ${(error as Error).message}`)
    }
  }

  async alterarSenha(email: string, novaSenha: string): Promise<Usuario> {
    try {
      const usuario = await prisma.usuario.update({
        where: { email },
        data: { senha: novaSenha },
      })
      return usuario
    } catch (error) {
      throw new Error(`Erro ao alterar senha: ${(error as Error).message}`)
    }
  }
}
