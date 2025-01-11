import type { FastifyReply, FastifyRequest } from 'fastify'

export async function Refresh(request: FastifyRequest, reply: FastifyReply) {
  // Verifica o JWT no cookie
  try {
    await request.jwtVerify({ onlyCookie: true })
  } catch (error) {
    return reply
      .status(401)
      .send({ message: 'Token inválido ou não fornecido.' })
  }

  const role = request.user.role
  const email = request.user.email

  // Gera o novo Access Token
  const accessToken = await reply.jwtSign(
    { role, email }, // Payload
    {
      sign: {
        sub: request.user.sub, // ID do usuário
        expiresIn: '10m', // Tempo curto de expiração
      },
    }
  )

  // Gera o novo Refresh Token
  const refreshToken = await reply.jwtSign(
    { role, email }, // Payload
    {
      sign: {
        sub: request.user.sub, // ID do usuário
        expiresIn: '7d', // Tempo longo de expiração
      },
    }
  )

  // Define o Refresh Token como um cookie seguro
  reply.setCookie('RefreshCookie', refreshToken, {
    path: '/refresh/token', // Cookie disponível em toda a aplicação
    secure: process.env.NODE_ENV === 'production', // Somente HTTPS em produção
    sameSite: 'strict', // Evita envio em requisições de terceiros
    httpOnly: true, // Torna inacessível via JavaScript
  })

  // Retorna o novo Access Token
  return reply.status(201).send({
    accessToken,
  })
}
