import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { email: string; role: string }
    user: { email: string; role: string; sub: string }
  }
}
