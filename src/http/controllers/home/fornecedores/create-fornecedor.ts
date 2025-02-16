import { randomUUID } from 'node:crypto'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { FactoriesFornecedor } from '@/use-case/factories/factories-fornecedor'
import { FactoriesUser } from '@/use-case/factories/factories-usuario'
import { FetchUsuario } from '../../../../use-case/controller-user'
import { exibir } from '../../../../use-case/utils/exibir'

export async function CadastroFornecedor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // * SCHEMA PARA VALIDAR OS DADOS PROVENIENTES DO REQUEST BODY *

  const usuario = await request.jwtVerify()
  const shemaFornecedor = z.object({
    nome: z.string(),
    nomeNegocio: z.string(),
    nif: z.string(),
    descricao: z.string(),
  })
  try {
    const { descricao, nif, nomeNegocio } = shemaFornecedor.parse(request.body)
    exibir.info(`Dados recebidos: ${JSON.stringify(request.body)}`)

    const email = request.user.email
    const usuario = await FactoriesUser().findUser(email)

    await FactoriesFornecedor().actualizar({
      usuarioId: usuario.usuario.id,
      email: usuario.usuario.email,
      nomeNegocio: nomeNegocio,
      telefone: usuario.usuario.telefone,
      nif: nif,
      descricao: descricao,
      id: randomUUID(),
      atualizadoEm: new Date(),
      criadoEm: new Date(),
    })
    exibir.info('USUARIO CRIADO COM SUCESSO')
    exibir.info(` EMAIL DO USUARIO ${request.user.email}`)

    //await FactoriesUser().actualizarUser(request.user.email)

    exibir.fatal('ERRO FATAL AO ACTUALIZAR USUARIO')

    exibir.info('FORNECEDOR CRIADO COM SUCESSO')
    return reply.status(201).send()
  } catch (err) {
    exibir.fatal('FORNECEDOR NAO CRIADO ')
    return reply.status(400).send()
  }
}
