# Catly API - Documentação do Projeto

## Introdução

Catly é uma API para gerenciar catálogos digitais personalizáveis, criada para atender pequenas e grandes empresas, criadores de conteúdo e afiliados. Este documento detalha as funcionalidades, requisitos e estrutura do projeto, priorizando escalabilidade e estabilidade.

### Etapa 1: Criação e Gerenciamento de Usuários

#### Requisitos Funcionais (RF)

[x] - Permitir o cadastro de usuários com dados essenciais (nome, email, senha).
[] - Implementar autenticação com suporte a 2FA.
[] - Gerenciar papéis de usuário podendo sair de usuario normal para outro tipo de perfil
[] - Garantir permissões de acesso baseadas no papel do usuário.
[] - Validar informações essenciais como e-mail e NIF durante o cadastro.
[] - Fornecer funcionalidade para recuperação de senha através de e-mail.
[] - Implementar suporte para criação de perfis personalizados, incluindo upload de foto e vídeo.

#### Requisitos Não-Funcionais (RNF)

[] - Garantir resposta em menos de 2 segundos para operações de login e cadastro.
[] - Proteger dados sensíveis com criptografia AES-256.
[] - Suportar expansão futura para integração com redes sociais.

#### Regras de Negócio (RN)

[] - Papéis e permissões devem ser atribuídos automaticamente durante o cadastro.
[] - Somente administradores podem alterar permissões de usuários existentes.

---

### Etapa 2: Gerenciamento de Catálogo

#### Requisitos Funcionais (RF)

[] - Permitir a criação de múltiplos catálogos com nomes únicos.
[] - Customizar o design e layout de cada catálogo.
[] - Gerar QR Codes para compartilhamento de catálogos.
[] - Adicionar links para redes sociais e contatos no catálogo.
[] - Suportar diferentes tipos de catálogos: produtos, serviços, menus interativos e conteúdos de criadores.
[] - Permitir relacionamentos entre catálogos (ex.: acessórios relacionados a roupas).
[] - Fornecer modo de visualização para clientes finais.
[] - Implementar funcionalidade de filtros e buscas dentro dos catálogos.
[] - Habilitar importação e exportação de catálogos em formatos padrão (ex.: CSV, JSON).

#### Requisitos Não-Funcionais (RNF)

[] - Garantir interface responsiva para dispositivos móveis e desktop.
[] - Assegurar que alterações em catálogos sejam refletidas em tempo real.

#### Regras de Negócio (RN)

[] - Usuários gratuitos podem criar até 5 catálogos; planos premium permitem catálogos ilimitados.
[] - Apenas fornecedores verificados podem acessar temas personalizados.
[] - Catálogos compartilhados por QR Code devem expirar após 30 dias (para usuários gratuitos).

---

### Etapa 3: Produtos e Serviços

#### Requisitos Funcionais (RF)

[] - Permitir cadastro completo de produtos com descrição, preço, quantidade e disponibilidade.
[] - Criar um inventário com controle de estoque básico.
[] - Possibilitar a categorização de produtos por tipo ou tags.
[] - Suportar menus interativos com listas personalizadas de itens.
[] - Adicionar campos customizados para produtos (ex.: cor, tamanho).
[] - Habilitar upload de múltiplas imagens para produtos.

#### Requisitos Não-Funcionais (RNF)

[] - Atualizar estoque automaticamente ao registrar vendas.
[] - Suportar exportação de dados do inventário para CSV ou PDF.

#### Regras de Negócio (RN)

[] - Garantir a escalabilidade para lidar com grandes volumes de produtos.
[] - Produtos esgotados devem ser automaticamente sinalizados como "Indisponível".

---

### Etapa 4: Programas de Afiliados

#### Requisitos Funcionais (RF)

[] - Fornecer funcionalidade para criar campanhas de afiliados personalizadas.
[] - Rastrear vendas realizadas por afiliados e associá-las a usuários específicos.
[] - Enviar notificações de performance para afiliados cadastrados.
[] - Permitir pagamentos automáticos de comissões via métodos integrados.
[] - Disponibilizar relatórios específicos para afiliados.
[] - Criar links de rastreamento únicos para cada afiliado.

#### Regras de Negócio (RN)

[] - Apenas fornecedores verificados podem criar campanhas de afiliados.
[] - Campanhas devem especificar comissão em porcentagem ou valor fixo.
[] - Afiliados devem concordar com os termos de uso antes de participar de campanhas.

---

### Etapa 5: Estatísticas e Relatórios

#### Requisitos Funcionais (RF)

[] - Gerar estatísticas detalhadas sobre cliques e visualizações dos catálogos.
[] - Exportar relatórios em formatos como PDF e CSV.
[] - Exibir gráficos de vendas, estoque e engajamento.
[] - Disponibilizar dados de localização para análise de comportamento dos clientes.
[] - Oferecer painéis customizáveis para estatísticas.
[] - Rastrear métricas específicas para criadores de conteúdo (ex.: visualizações, curtidas, compartilhamentos).

#### Requisitos Não-Funcionais (RNF)

[] - Garantir que relatórios sejam gerados em menos de 5 segundos.
[] - Oferecer suporte multilíngue para estatísticas.
[] - Armazenar relatórios históricos por até 12 meses.

---

### Etapa 6: Integração de Pagamentos

#### Requisitos Funcionais (RF)

[] - Integrar métodos locais, como Multicaixa Express e Unitel Money.
[] - Suportar gateways internacionais, como PayPal e Stripe.
[] - Automatizar o processo de geração e envio de faturas.
[] - Notificar usuários sobre pagamentos pendentes ou concluídos.
[] - Implementar split de pagamento para afiliados.
[] - Habilitar suporte para parcelamento de compras.

#### Regras de Negócio (RN)

[] - Fornecedores devem informar um NIF válido para habilitar vendas.
[] - Clientes finais podem fazer consultas de produtos diretamente via WhatsApp ou e-mail.
[] - Pagamentos pendentes devem ser cancelados automaticamente após 7 dias (para planos gratuitos).

---

### Etapa 7: Criadores de Conteúdo

#### Requisitos Funcionais (RF)

[] - Permitir upload de fotos e vídeos diretamente no perfil do criador.
[] - Implementar sistema de monetização para conteúdos exclusivos.
[] - Oferecer ferramentas para agendamento de postagens.
[] - Permitir interação dos seguidores por meio de curtidas e comentários.
[] - Disponibilizar relatórios de engajamento para criadores.

#### Regras de Negócio (RN)

[] - Apenas criadores verificados podem habilitar monetização.
[] - Os vídeos devem ter tamanho máximo de 500 MB para upload.
[] - Os conteúdos podem ser marcados como públicos, privados ou exclusivos para assinantes.

---

### Etapa 8: Suporte e Atendimento

#### Requisitos Funcionais (RF)

[] - Disponibilizar suporte via chat em tempo real para usuários premium.
[] - Oferecer base de conhecimento acessível para resolução de problemas comuns.
[] - Enviar notificações de atualizações e novas funcionalidades para os usuários.

#### Regras de Negócio (RN)

[] - Suporte 24/7 apenas para planos empresariais.
[] - Solicitações abertas no plano gratuito serão respondidas em até 48 horas.

---

## Esquema de Pastas do Projeto

| **Pasta/Arquivo**          | **Descrição**                                               |
|-----------------------------|-----------------------------------------------------------|
| `src/`                     | Diretório principal do código.                            |
| `src/modules/`             | Módulos principais do sistema.                            |
| `src/modules/auth/`        | Gerenciamento de autenticação e usuários.                 |
| `src/modules/catalog/`     | Funcionalidades relacionadas aos catálogos.               |
| `src/modules/product/`     | Gerenciamento de produtos e serviços.                     |
| `src/modules/affiliate/`   | Lógica de programas de afiliados.                         |
| `src/modules/statistics/`  | Geração de relatórios e análise de dados.                 |
| `src/modules/payment/`     | Integração com sistemas de pagamento.                     |
| `src/modules/location/`    | Funcionalidades associadas à geolocalização.              |
| `src/database/`            | Configuração do banco de dados.                          |
| `src/utils/`               | Funções utilitárias compartilhadas.                       |
| `src/tests/`               | Testes unitários e de integração.                         |
| `public/`                  | Recursos estáticos como imagens e ícones.                |

## Tecnologias Utilizadas

***logger personalizado

Aqui está a resposta detalhada:

Funções do Logger
A biblioteca Pino oferece vários métodos para diferentes níveis de log. Aqui está uma tabela com as funções principais:

Função  Descrição
*****logger.info**: Registra informações gerais.
***logger.error**: Registra mensagens de erro.
**logger.warn**: Registra mensagens de aviso.
**logger.debug**: Registra mensagens de depuração (debug).
**logger.trace**: Registra mensagens com nível de rastreamento detalhado.
**logger.fatal**: Registra erros fatais que causam encerramento ou falhas críticas no sistema.

src/
├── repository/                           # Lógica de persistência de dados
│   ├── prisma/                           # Repositórios usando Prisma ORM
│   │   ├── CatalogRepository.ts          # Interface para manipulação de catálogos no banco de dados
│   │   ├── UserRepository.ts             # Interface para manipulação de usuários
│   │   └── MenuRepository.ts             # Interface para manipulação de menus
│   ├── memory/                           # Repositórios em memória (para testes ou desenvolvimento local)
│   │   ├── CatalogRepository.ts
│   │   ├── UserRepository.ts
│   │   └── MenuRepository.ts
│   └── base/                             # Repositórios base para padronizar métodos CRUD
│       └── BaseRepository.ts             # Classe base com métodos genéricos (find, create, update, delete)
├── env/                                  # Configurações e variáveis de ambiente
│   ├── index.ts                          # Definição de variáveis de ambiente (ex: PORT, DB_HOST)
├── lib/                                  # Funções auxiliares e utilitárias
│   ├── geoUtils.ts                       # Funções para cálculos geográficos (ex: distância entre fornecedores e clientes)
│   ├── emailUtils.ts                     # Funções auxiliares para envio de emails (notificações, faturas)
│   ├── smsUtils.ts                       # Funções para envio de SMS de confirmação
│   └── qrCodeUtils.ts                    # Funções para geração e manipulação de QR codes
├── @types/                               # Tipos personalizados do projeto
│   ├── Catalog.d.ts                      # Tipos relacionados a catálogos
│   ├── User.d.ts                         # Tipos relacionados a usuários (cliente, fornecedor)
│   ├── Menu.d.ts                         # Tipos relacionados a menus
│   └── Transaction.d.ts                  # Tipos relacionados a transações e faturas
├── use-case/                             # Casos de uso da lógica de negócio
│   ├── errors/                           # Tratamento de erros
│   │   ├── ErrorHandler.ts               # Manipulação centralizada de erros
│   │   └── ErrorTypes.ts                 # Definição de tipos e códigos de erro
│   ├── factories/                        # Fábricas para instanciar casos de uso
│   │   ├── CreateCatalogUseCase.ts       # Caso de uso para criar um catálogo
│   │   ├── CreateUserUseCase.ts          # Caso de uso para criar um usuário
│   │   ├── CreateMenuUseCase.ts          # Caso de uso para criar um menu
│   │   ├── MakePaymentUseCase.ts         # Caso de uso para processar pagamentos
│   │   └── GenerateQRCodeUseCase.ts      # Caso de uso para gerar QR codes para compartilhamento
│   ├── utils/                            # Funções utilitárias específicas para os casos de uso
│   │   ├── PaymentUtils.ts               # Funções para processamento de pagamentos
│   │   └── CatalogUtils.ts               # Funções auxiliares para manipulação de catálogos
├── http/                                 # Controladores HTTP e middlewares
│   ├── controllers/                      # Controladores das rotas HTTP
│   │   ├── CatalogController.ts          # Controlador para operações de catálogos (visualização, criação, etc.)
│   │   ├── UserController.ts             # Controlador para operações de usuários (registro, login, perfil)
│   │   ├── MenuController.ts             # Controlador para operações de menus
│   │   ├── TransactionController.ts      # Controlador para transações (pagamentos, faturas)
│   │   └── QRCodeController.ts           # Controlador para geração e recuperação de QR codes
│   ├── middlewares/                      # Middlewares para autorização, validação e manipulação de erros
│   │   ├── authMiddleware.ts             # Middleware para autenticação do usuário
│   │   ├── validationMiddleware.ts       # Middleware para validação de dados de entrada
│   │   ├── roleMiddleware.ts             # Middleware para controle de permissões de acesso
│   │   └── errorHandlerMiddleware.ts     # Middleware para captura e gerenciamento de erros
├── services/                             # Serviços externos e integrações
│   ├── PaymentService.ts                 # Integração com gateways de pagamento
│   ├── NotificationService.ts            # Serviço para envio de notificações por email ou SMS
│   └── QRCodeService.ts                  # Serviço para criação e leitura de QR codes
├── tests/                                # Testes unitários e de integração
│   ├── unit/                             # Testes unitários para funções específicas
│   ├── integration/                      # Testes de integração para fluxos completos
│   └── mocks/                            # Mock de dados e dependências para testes
└── app.ts                                # Arquivo de inicialização da aplicação (configuração de servidores, middlewares, etc.)

------------------------------------------------------------------------------------------

# Tabela de Esquema de Rotas [] - Catly

Abaixo está a tabela de rotas para os diferentes tipos de usuários no sistema Catly, incluindo Usuário Normal (Cliente), Usuário Fornecedor e Administrador.

## Rotas Gerais

[] - **[GET] /home**: Página principal para todos os usuários.
[] - **[GET] /home/usuario**: Página de detalhes do prestador de serviço ou catálogo do fornecedor.
[] - **[POST] /usuarios/login**: Rota para login de usuários.
[] - **[POST] /usuarios/cadastrar**: Rota para cadastro de novos usuários (clientes ou fornecedores).
[] - **[GET] /usuarios/detalhes**: Exibe detalhes do perfil do usuário.
[] - **[PUT] /usuarios/atualizar**: Atualiza os dados do usuário.
[] - **[POST] /usuarios/alterar-senha**: Altera a senha do usuário.

---

## Rotas para Fornecedores

[] - **[GET] /fornecedores/catalogos**: Exibe todos os catálogos dos fornecedores.
[] - **[POST] /fornecedores/catalogos/criar**: Permite que o fornecedor crie um novo catálogo.
[] - **[GET] /fornecedores/menus**: Exibe os menus dos fornecedores.
[] - **[POST] /fornecedores/menus/criar**: Permite que o fornecedor crie um novo menu.
[] - **[GET] /fornecedores/faturas**: Exibe todas as faturas emitidas relacionadas ao fornecedor.
[] - **[POST] /fornecedores/faturas/emitir**: Emite uma fatura para uma transação concluída.
[] - **[GET] /fornecedores/localizacao**: Exibe a localização do fornecedor.
[] - **[GET] /fornecedores/estatisticas**: Exibe estatísticas detalhadas sobre visualizações, vendas e engajamento.

---

## Rotas para Clientes

[] - **[GET] /clientes/pesquisar**: Pesquisa e filtra prestadores de serviços ou catálogos por localização, categoria ou preço.
[] - **[POST] /clientes/comprar**: Inicia uma compra de um item de menu ou catálogo.
[] - **[POST] /clientes/denunciar**: Permite que o cliente denuncie uma loja ou fornecedor.
[] - **[GET] /clientes/estatisticas**: Exibe as estatísticas de compras do cliente.
[] - **[POST] /clientes/avaliar**: Permite que clientes avaliem fornecedores ou produtos comprados.

---

## Rotas para Administradores

[] - **[GET] /admin/usuarios**: Lista todos os usuários do sistema.
[] - **[GET] /admin/fornecedores**: Lista todos os fornecedores cadastrados no sistema.
[] - **[GET] /admin/estatisticas**: Exibe estatísticas globais do sistema.
[] - **[GET] /admin/denuncias**: Exibe todas as denúncias feitas por clientes.
[] - **[PUT] /admin/denuncias/{id}**: Atualiza o status da denúncia (em análise, resolvida, rejeitada).
[] - **[GET] /admin/catalogos**: Exibe todos os catálogos criados pelos fornecedores.
[] - **[GET] /admin/menus**: Exibe todos os menus criados pelos fornecedores.
[] - **[DELETE] /admin/usuarios/{id}**: Remove um usuário do sistema.
[] - **[DELETE] /admin/catalogos/{id}**: Remove um catálogo específico.
[] - **[DELETE] /admin/menus/{id}**: Remove um menu específico.

---

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id            String        @id @default(cuid())
  email         String        @unique
  nome          String
  telefone      String
  senha         String
  role          Role          @default(USUARIO)
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  fornecedorId  String?
  afiliacoes    Afiliacao[]
  catalogos     Catalogo[]
  Fornecedor    Fornecedor?   @relation("UsuarioToFornecedor")
  localizacoes  Localizacao[]
  fornecedor    Fornecedor?   @relation(fields: [fornecedorId], references: [id])
  endereco      Endereco?
  permissoes    UsuarioPermissao[]
  status        UsuarioStatusEnum @default(CANDIDATO)
  auditoria     Auditoria[]
}

model Permissao {
  id            String        @id @default(cuid())
  nome          String
  descricao     String
  roles         Role[]        @relation("PermissaoRole")
}

model UsuarioPermissao {
  id            String        @id @default(cuid())
  usuarioId     String
  permissaoId   String
  usuario       Usuario      @relation(fields: [usuarioId], references: [id])
  permissao     Permissao    @relation(fields: [permissaoId], references: [id])
}

model Role {
  id            String        @id @default(cuid())
  nome          String
  descricao     String
  permissoes    Permissao[]   @relation("PermissaoRole")
}

enum RoleEnum {
  USUARIO
  FORNECEDOR
  DISTRIBUIDOR
  ENTREGADOR
  GERENTE_RELACIONAMENTO
  ADMINISTRADOR
}

model Fornecedor {
  id            String        @id @default(cuid())
  email         String        @unique
  telefone      String
  descricao     String
  role          Role
  usuarioId     String        @unique
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  nif           String        @unique
  nomeNegocio   String
  usuario       Usuario       @relation("UsuarioToFornecedor", fields: [usuarioId], references: [id])
  localizacao   Localizacao[]
  produtos      Produto[]
  programas     ProgramaAfiliados[]
  filiais       Filial[]
}

model Localizacao {
  id            String        @id @default(cuid())
  latitude      Float
  longitude     Float
  fornecedorId  String?
  usuarioId     String?
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  fornecedor    Fornecedor?   @relation(fields: [fornecedorId], references: [id])
  usuario       Usuario?      @relation(fields: [usuarioId], references: [id])
}

model Filial {
  id            String        @id @default(cuid())
  nome          String
  enderecoId    String
  fornecedorId  String
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  fornecedor    Fornecedor    @relation(fields: [fornecedorId], references: [id])
  endereco      Endereco      @relation(fields: [enderecoId], references: [id])
}

model Endereco {
  id            String        @id @default(cuid())
  rua           String
  cidade        String
  estado        String
  pais          String
  zip           String
  filial        Filial?       @relation(fields: [id], references: [enderecoId])
}

model Catalogo {
  id            String        @id @default(cuid())
  nome          String
  descricao     String
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  usuarioId     String
  usuario       Usuario      @relation(fields: [usuarioId], references: [id])
  menus         Menu[]
  produtos      Produto[]
}

model Produto {
  id            String        @id @default(cuid())
  nome          String
  preco         Float
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  catalogoId    String?
  disponibilidade Disponibilidade @default(DISPONIVEL)
  fornecedorId  String
  quantidade    Int
  catalogo      Catalogo?     @relation(fields: [catalogoId], references: [id])
  fornecedor    Fornecedor    @relation(fields: [fornecedorId], references: [id])
}

model Afiliacao {
  id            String            @id @default(cuid())
  usuarioId     String
  programaId    String
  criadoEm      DateTime          @default(now())
  atualizadoEm  DateTime          @updatedAt
  programa      ProgramaAfiliados @relation(fields: [programaId], references: [id])
  usuario       Usuario           @relation(fields: [usuarioId], references: [id])
}

model ProgramaAfiliados {
  id            String        @id @default(cuid())
  fornecedorId  String
  nome          String
  descricao     String
  comissao      Float
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  afiliacoes    Afiliacao[]
  fornecedor    Fornecedor    @relation(fields: [fornecedorId], references: [id])
}

model Menu {
  id            String        @id @default(cuid())
  nome          String
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  catalogoId    String
  itens         Item[]
  catalogo      Catalogo      @relation(fields: [catalogoId], references: [id])
}

model Item {
  id            String        @id @default(cuid())
  nome          String
  preco         Float
  menuId        String
  criadoEm      DateTime      @default(now())
  atualizadoEm  DateTime      @updatedAt
  menu          Menu          @relation(fields: [menuId], references: [id])
}

model Auditoria {
  id            String        @id @default(cuid())
  usuarioId     String
  acao          String
  detalhes      String
  criadoEm      DateTime      @default(now())
  usuario       Usuario      @relation(fields: [usuarioId], references: [id])
}

model UsuarioStatus {
  id            String        @id @default(cuid())
  usuarioId     String
  status        UsuarioStatusEnum
  criadoEm      DateTime      @default(now())
  usuario       Usuario      @relation(fields: [usuarioId], references: [id])
}

enum UsuarioStatusEnum {
  CANDIDATO
  FORNECEDOR
  DISTRIBUIDOR
  ENTREGADOR
  GERENTE_RELACIONAMENTO
}

enum Disponibilidade {
  DISPONIVEL
  INDISPONIVEL
}

enum RoleEnum {
  USUARIO
  FORNECEDOR
  DISTRIBUIDOR
  ENTREGADOR
  GERENTE_RELACIONAMENTO
  ADMINISTRADOR
}
## Principais Melhorias:
Controle Granular de Permissões:

A tabela Permissao centraliza a definição de permissões, que podem ser associadas a diferentes roles.
A tabela UsuarioPermissao relaciona os usuários com as permissões específicas que possuem.
Hierarquia de Usuários e Transformação de Perfil:

A mudança de status do usuário é monitorada pela tabela UsuarioStatus, permitindo que o status de um usuário seja alterado (ex.: de CANDIDATO para FORNECEDOR).
Ao se tornar fornecedor, o perfil de USUARIO pode ser excluído ou transformado.
Gestão de Localizações e Filiais:

O modelo Filial permite que um fornecedor tenha múltiplas filiais, cada uma com seu próprio endereço, e essas filiais podem ser associadas a endereços específicos.
Auditoria e Rastreabilidade:

A tabela Auditoria registra as ações realizadas pelos usuários para garantir rastreabilidade das modificações, essencial para questões de compliance e segurança.
Escalabilidade e Flexibilidade:

O modelo permite adicionar facilmente novos tipos de usuários e permissões conforme a necessidade. Por exemplo, se você precisar adicionar mais papéis como gerente ou funcionário, basta adicionar novos valores ao enum RoleEnum.
Performance e Otimização:

Índices podem ser aplicados a campos frequentemente consultados, como email, role, fornecedorId e status para melhorar a performance de buscas.
