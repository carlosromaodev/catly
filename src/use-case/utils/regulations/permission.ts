// import type { OpctionPermission } from '@/use-case/make/makepermission'
// import { roleEnum, type permission } from '@prisma/client'

// interface RequestPermission {
//   id: string
//   name: string
//   description: string
// }

// interface ResponsePermission {
//   Permission: permission
// }

// export class Permission {

//   constructor(private readonly permission: OpctionPermission) {} 
//   async createPermission(
//     request: RequestPermission
//   ): Promise<ResponsePermission> {
//     const permission = await this.permission.create({
//       id: request.id,
//       name: request.name,
//       description: request.description,
//     })
//     return { Permission: {} as permission }
//   }

// }

// //*----------------------------------------------------------------------


// const PERMISSOES_EXPLORADOR = [
//   "visualizar_conteudos",
//   "comentar_conteudos",
//   "seguir_usuarios",
//   "salvar_conteudo",
// ];

// const PERMISSOES_CRIADOR_DE_CONTEUDO = [
//   ...PERMISSOES_EXPLORADOR,
//   "criar_conteudo",
//   "editar_proprio_conteudo",
//   "deletar_proprio_conteudo",
//   "acessar_analytics_basico",
// ];

// const PERMISSOES_FORNECEDOR_DE_SERVICOS = [
//   ...PERMISSOES_EXPLORADOR,
//   "criar_servico",
//   "editar_proprio_servico",
//   "visualizar_agendamentos",
//   "responder_clientes",
// ];

// const PERMISSOES_VENDEDOR_DE_PRODUTOS = [
//   ...PERMISSOES_EXPLORADOR,
//   "cadastrar_produto",
//   "editar_proprio_produto",
//   "gerenciar_pedidos",
//   "acessar_analytics_loja",
// ];

// const PERMISSOES_GESTOR_DE_COMUNIDADE = [
//   ...PERMISSOES_CRIADOR_DE_CONTEUDO,
//   "moderar_comentarios",
//   "banir_usuarios",
//   "aprovar_conteudos",
//   "visualizar_todos_usuarios",
//   "gerenciar_permissoes",
// ];

// function getPermissoesPorRole(role: roleEnum): string[] {
//   switch (role) {
//     case roleEnum.EXPLORADOR:
//       return PERMISSOES_EXPLORADOR;
//     case roleEnum.CRIADOR_DE_CONTEUDO:
//       return PERMISSOES_CRIADOR_DE_CONTEUDO;
//     case roleEnum.FORNECEDOR_DE_SERVICOS:
//       return PERMISSOES_FORNECEDOR_DE_SERVICOS;
//     case roleEnum.VENDEDOR_DE_PRODUTOS_FISICOS:
//     case roleEnum.VENDEDOR_DE_PRODUTOS_DIGITAIS:
//       return PERMISSOES_VENDEDOR_DE_PRODUTOS;
//     case roleEnum.GERENTE_DE_ECOMMERCE:
//     case roleEnum.CURADOR_DE_CONTEUDO:
//       return PERMISSOES_GESTOR_DE_COMUNIDADE;
//     default:
//       return []
//   }
// }



