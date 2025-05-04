import { randomUUID } from 'node:crypto'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { FactoriesUser } from '@/use-case/factories/factories-usuario'
import { exibir } from '@/use-case/utils/exibir'

export async function CadastroUSer(
  request: FastifyRequest,
  reply: FastifyReply
) {

  //*================ SCHEMA PARA VALIDAR OS DADOS PROVENIENTES DO REQUEST BODY

  const shemaUsuario = z.object({
    email: z.string().email('ERROR EMAIL'),
    name: z.string(),
    password: z.string().min(6),
    phone: z.string(),
  })

  try {
    const { name, password, email, phone } = shemaUsuario.parse(request.body)

    exibir.info(`Dados recebidos: ${JSON.stringify(request.body)}`)

    await FactoriesUser().createUser({
      email,
      name,
      password,
      phone,
    })

    exibir.info('USUARIO CRIADO COM SUCESSO')

    return reply.status(201).send()

  } catch (err) {
    exibir.fatal('USUARIO NAO CRIADO ')
    
    return reply.status(400).send(err)
  }
}
