import type { FastifyInstance } from 'fastify'
import { Auth } from './auth/auth'
import { CadastroUSer } from './clientes/create-user'
import { CadastroFornecedor } from './fornecedores/create-fornecedor'
import { RegisterProduct } from './fornecedores/produto'
import { VerificarJwt } from '../../middlewares/veificar-jwt'
import { CreateCatalog } from './fornecedores/catalogo/index'


export async function RouteHome(app: FastifyInstance) {
  app.post('/cadastro', CadastroUSer)
  app.post('/auth', Auth)
  //* REQUER AUTENTIFICAÇÃO
  app.addHook('onRequest', VerificarJwt)
  app.post('/criarfornecedor', CadastroFornecedor)
  app.post('/criarcatalogo', CreateCatalog)
  app.post('/criarproduto', RegisterProduct)
}