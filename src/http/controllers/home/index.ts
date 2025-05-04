import type { FastifyInstance } from 'fastify'
import { VerificarJwt } from '../../middlewares/veificar-jwt'
import { Auth } from './auth/auth'
import { CadastroUSer } from './user/create-user'
import { CreateCatalog } from './fornecedores/catalogo/index'
import { CadastroFornecedor } from './fornecedores/create-fornecedor'
import { RegisterProduct } from './fornecedores/produto'

export async function RouteHome(app: FastifyInstance) {
  // Rotas públicas (sem autenticação)
  app.post('/cadastro', CadastroUSer)
  app.post('/auth', Auth)

  // Rotas protegidas (com autenticação)
  app.register(async protectedRoutes => {
    protectedRoutes.addHook('onRequest', VerificarJwt)
    protectedRoutes.post('/criarfornecedor', CadastroFornecedor)
    protectedRoutes.post('/criarcatalogo', CreateCatalog)
    protectedRoutes.post('/criarproduto', RegisterProduct)
  })
}
