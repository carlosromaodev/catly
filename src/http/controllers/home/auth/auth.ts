import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { FactoriesAuth } from '../../../../use-case/factories/factories-auth'
import { exibir } from '../../../../use-case/utils/exibir'

export async function Auth(request: FastifyRequest, reply: FastifyReply) {
  const schemaDados = z.object({
    email: z.string().email(),
    senha: z.string().min(6),
  })

  try {
    const { email, senha } = schemaDados.parse(request.body)
    const dados = FactoriesAuth()
    const { usuario } = await dados.login({ email, senha })

    if (!usuario?.email || !usuario?.role || !usuario?.id) {
      throw new Error('Dados do usuário incompletos')
    }
    const token = await reply.jwtSign(
      {
        email: usuario.email,
        role: usuario.role,
      },
      {
        sub: usuario.id,
      }
    )

    const refreshToken = await reply.jwtSign(
      {
        email: usuario.email,
        role: usuario.role,
      },
      {
        sub: usuario.id,
      }
    )

    exibir.info('LOGADO COM SUCESSO')
    reply.status(201).send({ token })
  } catch (err) {
    if (err instanceof z.ZodError) {
      reply.status(400).send({ message: 'Dados inválidos', issues: err.errors })
    } else if (err instanceof Error) {
      exibir.fatal(`ERRO AO FAZER LOGIN: ${err.message}`)
      reply.status(401).send({ message: 'Erro na autenticação' })
    } else {
      // Caso o erro não seja esperado
      exibir.fatal('Erro inesperado ao fazer login')
      reply.status(500).send({ message: 'Erro inesperado' })
    }
  }
}
