import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'
import { RouteHome } from './http/controllers/home'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()
app.register(fastifyCookie, {})

app.register(fastifyJwt, {
  secret: env.KEYJWT,
  cookie: {
    cookieName: 'RefreshCookie', // Nome do cookie deve ser igual ao utilizado no setCookie
    signed: false, // Cookies não assinados
  },
  sign: {
    expiresIn: '7d',
  },
})

app.register(RouteHome)
