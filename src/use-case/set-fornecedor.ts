import type { Fornecedor } from '@prisma/client'
import type { makeUsuario } from './make/make-Usuaro'
import type { makeFornecedor } from './make/make-fornecedor'
import { exibir } from './utils/exibir'

export interface RequestFornecedor {
  email: string
  nomeNegocio: string
  usuarioId: string
  telefone: string
  nif: string
  descricao: string
  id: string
  atualizadoEm: Date
  criadoEm: Date
}

export interface ResponseFornecedor {
  fornecedor: Fornecedor // Modelo Prisma ou definido no projeto
}

//*-------------------------------------------------------------------------------------------------

/** PARM PARA FACILITAR NAS INTERFACES
 * @param date - DADOS PARA ACTUALIZAÇÃO DO FORNECEDOR
 * @returns - RETORNO DO FORNECEDOR
 */

export class ForneceedorCreate {
  constructor(
    private funcoesUsuario: makeUsuario,
    private funcoesFornecedor: makeFornecedor
  ) {}

  async actualizar(date: RequestFornecedor): Promise<ResponseFornecedor> {
    const usuario = await this.funcoesUsuario.ProcurarGmail(date.email)
    if (!usuario) {
      throw new Error('USUARIO NAO EXISTENTE')
    }
    const fornecedor = await this.funcoesFornecedor.actualizar({
      usuarioId: usuario.id,
      nomeNegocio: date.nomeNegocio,
      telefone: usuario.telefone,
      descricao: date.descricao,
      nif: date.nif,
      email: usuario.email,
      criadoEm: usuario.criadoEm,
      atualizadoEm: date.atualizadoEm,
      id: date.id,
      role: 'FORNECEDOR',
    })
    exibir.info(' FORNECEDOR CRIADO COM SUCESSO ')
    return { fornecedor }
  }
  // *--------------------------------------------------------------------------------

  async findFornecedorId(id: string): Promise<ResponseFornecedor> {
    const fornecedor = await this.funcoesFornecedor.procurarFornecedorId(id)
    if (!fornecedor) {
      throw new Error()
    }
    exibir.info(` USUARIO ACHADO  NOME : [${fornecedor.nomeNegocio}] `)
    return { fornecedor }
  }

  // *----------------------------------------------------------------------------
  async findFornecedorEmail(email: string): Promise<ResponseFornecedor> {
    const fornecedor =
      await this.funcoesFornecedor.procurarFornecedorEmail(email)
    if (!fornecedor) {
      throw new Error()
    }
    exibir.info(` USUARIO ACHADO  NOME : [${fornecedor.nomeNegocio}] `)
    return { fornecedor }
  }
}
