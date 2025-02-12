import { randomUUID } from 'node:crypto'
import { fatoriesCatalogo } from '@/use-case/factories/factories-catalogo'
import { exibir } from '@/use-case/utils/exibir'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function CreateCatalog(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const shemaCatalog = z.object({
    nome: z.string(),
    descricao: z.string(),
  })

  try {
    const { nome, descricao } = shemaCatalog.parse(request.body)

    // Verificar usuário autenticado
    if (!request.user?.sub) {
      exibir.fatal('Usuário não autenticado ou ID inválido')
      return reply.status(401).send({ message: 'Usuário não autenticado' })
    }

    // Log de dados recebidos
    exibir.info(
      `Criando catálogo com os dados: Nome=${nome}, Descrição=${descricao}, Usuário=${request.user.sub}`
    )

    // Criar catálogo
    const catalogo = await fatoriesCatalogo().createCatalog({
      id: randomUUID(),
      nome,
      usuarioId: request.user.sub,
      descricao,
    })

    exibir.info(`CATALOGO CRIADO COM SUCESSO: ${JSON.stringify(catalogo)}`)
    reply.status(201).send({ message: 'CATALOGO CRIADO COM SUCESSO', catalogo })
  } catch (err) {
    exibir.fatal(`Erro ao criar catálogo: ${err}`)
    reply.status(400).send({ message: 'Erro ao criar catálogo', details: err })
  }
}
