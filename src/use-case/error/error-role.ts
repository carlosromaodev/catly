export class RoleError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'Erro em Aplicar Permissão'
  }
}
