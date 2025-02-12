import type { FastifyReply, FastifyRequest } from 'fastify'

export async function VerificarJwt(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.status(401).send({ messege: ` ERRO DE PERMISSÃO ${err}` })
  }
}
