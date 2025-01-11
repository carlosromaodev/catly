import type { Usuario } from '@prisma/client'
export interface usuario {
  email: string
  nome: string
  senha: string
  telefone: string
  id: string
}

export interface makeUsuario {
  Criar(data: usuario): Promise<Usuario>
  ProcurarGmail(email: string): Promise<Usuario | null>
  findId(id: string): Promise<Usuario | null>
  alterarSenha(email: string, novaSenha: string): Promise<Usuario>
  actualizarUsuario(email: string, fornecedorId: string): Promise<Usuario>
}
