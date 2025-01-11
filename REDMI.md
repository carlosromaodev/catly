# Catly API Documentation

# Catly API - Documentação do Projeto

## Introdução

Catly é uma API para gerenciar catálogos digitais personalizáveis, criada para
 atender pequenas e grandes empresas. Este documento detalha as funcionalidades,
 requisitos e estrutura do projeto, priorizando escalabilidade e estabilidade.

### Etapa 1: Criação e Gerenciamento de Usuários

#### Requisitos Funcionais (RF)

- [x] Permitir o cadastro de usuários com dados básicos (nome, email, senha).
- [ ] Implementar autenticação com suporte a 2FA.
- [x] Gerenciar papéis de usuário: Administrador, Fornecedor e Cliente.
- [x] Garantir permissões de acesso baseadas no papel do usuário.
- [ ] Validar informações essenciais como e-mail e NIF durante o cadastro.

#### Requisitos Não-Funcionais (RNF)

- [ ] Garantir resposta em menos de 2 segundos para operações de login e cadastro.
- [ ] Proteger dados sensíveis com criptografia AES-256.
- [ ] Suportar expansão futura para integração com redes sociais.

### Etapa 2: Gerenciamento de Catálogo

### Requisitos Funcionais (RF)

- [ ] Permitir a criação de múltiplos catálogos com nomes únicos.
- [ ] Customizar o design e layout de cada catálogo.
- [ ] Gerar QR Codes para compartilhamento de catálogos.
- [ ] Adicionar links para redes sociais e contatos no catálogo.
- [ ] Suportar diferentes tipos de catálogos: produtos, serviços e menus interativos.
- [ ] Permitir relacionamentos entre catálogos (ex.: acessórios relacionados a roupas).
- [ ] Fornecer modo de visualização para clientes finais.

#### Requisitos Não-Funcionais (RNF)

- [ ] Garantir interface responsiva para dispositivos móveis e desktop.
- [ ] Assegurar que alterações em catálogos sejam refletidas em tempo real.

#### Regras de Negócio (RN)

- [ ] Usuários gratuitos podem criar até 5 catálogos; planos premium permitem catálogos ilimitados.
- [ ] Apenas fornecedores verificados podem acessar temas personalizados.

### Etapa 3: Produtos e Serviços

#### Requisitos Funcionais (RF)

- [ ] Permitir cadastro completo de produtos com descrição, preço, quantidade e disponibilidade.
- [ ] Criar um inventário com controle de estoque básico.
- [ ] Possibilitar a categorização de produtos por tipo ou tags.
- [ ] Suportar menus interativos com listas personalizadas de itens.
- [ ] Adicionar campos customizados para produtos (ex.: cor, tamanho).

#### Requisitos Não-Funcionais (RNF)

- [ ] Atualizar estoque automaticamente ao registrar vendas.
- [ ] Suportar exportação de dados do inventário para CSV ou PDF.

---

### Etapa 4: Programas de Afiliados

#### Requisitos Funcionais (RF)

- [ ] Fornecer funcionalidade para criar campanhas de afiliados personalizadas.
- [ ] Rastrear vendas realizadas por afiliados e associá-las a usuários específicos.
- [ ] Enviar notificações de performance para afiliados cadastrados.
- [ ] Permitir pagamentos automáticos de comissões via métodos integrados.
- [ ] Disponibilizar relatórios específicos para afiliados.

#### Regras de Negócio (RN)

- [ ] Apenas fornecedores verificados podem criar campanhas de afiliados.
- [ ] Campanhas devem especificar comissão em porcentagem ou valor fixo.

---

### Etapa 5: Estatísticas e Relatórios

#### Requisitos Funcionais (RF)

- [ ] Gerar estatísticas detalhadas sobre cliques e visualizações dos catálogos.
- [ ] Exportar relatórios em formatos como PDF e CSV.
- [ ] Exibir gráficos de vendas, estoque e engajamento.
- [ ] Disponibilizar dados de localização para análise de comportamento dos clientes.
- [ ] Oferecer painéis customizáveis para estatísticas.

#### Requisitos Não-Funcionais (RNF)

- [ ] Garantir que relatórios sejam gerados em menos de 5 segundos.
- [ ] Oferecer suporte multilíngue para estatísticas.

---

### Etapa 6: Integração de Pagamentos

#### Requisitos Funcionais (RF)

- [ ] Integrar métodos locais, como Multicaixa Express e Unitel Money.
- [ ] Suportar gateways internacionais, como PayPal e Stripe.
- [ ] Automatizar o processo de geração e envio de faturas.
- [ ] Notificar usuários sobre pagamentos pendentes ou concluídos.
- [ ] Implementar split de pagamento para afiliados.

#### Regras de Negócio (RN)

- [ ] Fornecedores devem informar um NIF válido para habilitar vendas.
- [ ] Clientes finais podem fazer consultas de produtos diretamente via WhatsApp ou e-mail.

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

# Tabela de Esquema de Rotas - Catly

Abaixo está a tabela de rotas para os diferentes tipos de usuários no sistema Catly, incluindo Usuário Normal (Cliente), Usuário Fornecedor e Administrador.

## Rotas Gerais

- **[GET] /home**: Página principal para todos os usuários.
- **[GET] /home/usuario**: Página de detalhes do prestador de serviço ou catálogo do fornecedor.
- **[POST] /usuarios/login**: Rota para login de usuários.
- **[POST] /usuarios/cadastrar**: Rota para cadastro de novos usuários (clientes ou fornecedores).
- **[GET] /usuarios/detalhes**: Exibe detalhes do perfil do usuário.
- **[PUT] /usuarios/atualizar**: Atualiza os dados do usuário.
- **[POST] /usuarios/alterar-senha**: Altera a senha do usuário.

---

## Rotas para Fornecedores

- **[GET] /fornecedores/catalogos**: Exibe todos os catálogos dos fornecedores.
- **[POST] /fornecedores/catalogos/criar**: Permite que o fornecedor crie um novo catálogo.
- **[GET] /fornecedores/menus**: Exibe os menus dos fornecedores.
- **[POST] /fornecedores/menus/criar**: Permite que o fornecedor crie um novo menu.
- **[GET] /fornecedores/faturas**: Exibe todas as faturas emitidas relacionadas ao fornecedor.
- **[POST] /fornecedores/faturas/emitir**: Emite uma fatura para uma transação concluída.
- **[GET] /fornecedores/localizacao**: Exibe a localização do fornecedor.
- **[GET] /fornecedores/estatisticas**: Exibe estatísticas detalhadas sobre visualizações, vendas e engajamento.

---

## Rotas para Clientes

- **[GET] /clientes/pesquisar**: Pesquisa e filtra prestadores de serviços ou catálogos por localização, categoria ou preço.
- **[POST] /clientes/comprar**: Inicia uma compra de um item de menu ou catálogo.
- **[POST] /clientes/denunciar**: Permite que o cliente denuncie uma loja ou fornecedor.
- **[GET] /clientes/estatisticas**: Exibe as estatísticas de compras do cliente.
- **[POST] /clientes/avaliar**: Permite que clientes avaliem fornecedores ou produtos comprados.

---

## Rotas para Administradores

- **[GET] /admin/usuarios**: Lista todos os usuários do sistema.
- **[GET] /admin/fornecedores**: Lista todos os fornecedores cadastrados no sistema.
- **[GET] /admin/estatisticas**: Exibe estatísticas globais do sistema.
- **[GET] /admin/denuncias**: Exibe todas as denúncias feitas por clientes.
- **[PUT] /admin/denuncias/{id}**: Atualiza o status da denúncia (em análise, resolvida, rejeitada).
- **[GET] /admin/catalogos**: Exibe todos os catálogos criados pelos fornecedores.
- **[GET] /admin/menus**: Exibe todos os menus criados pelos fornecedores.
- **[DELETE] /admin/usuarios/{id}**: Remove um usuário do sistema.
- **[DELETE] /admin/catalogos/{id}**: Remove um catálogo específico.
- **[DELETE] /admin/menus/{id}**: Remove um menu específico.

---

## Explicação das Rotas

### **Rotas Públicas**

- **/home**: A página inicial é acessível para todos os usuários. Exibe informações gerais sobre os serviços e permite pesquisa inicial de fornecedores.
- **/usuarios/login** e **/usuarios/cadastrar**: Rota de login e cadastro são abertas para novos usuários acessarem o sistema.

### **Rotas de Fornecedores**

- Permitem aos fornecedores criar, gerenciar e monitorar seus catálogos, menus e faturas. Essas rotas têm autenticação obrigatória e verificam o papel do usuário antes de autorizar ações.

### **Rotas de Clientes**

- Oferecem a funcionalidade de pesquisa, compra e avaliação de fornecedores e produtos, além de facilitar denúncias e a visualização de histórico de compras.

### **Rotas Administrativas**

- Restringidas a usuários com papel de administrador, permitindo controle total do sistema, incluindo gerenciamento de usuários, fornecedores, estatísticas e denúncias.

---

## Detalhes do Acesso

- **Clientes**: Acesso às funcionalidades de busca, compras, estatísticas e denúncias.
- **Fornecedores**: Controle completo sobre catálogos, menus e visualização de estatísticas.
- **Administradores**: Acesso total ao sistema, com poderes para gerenciar e monitorar todos os usuários e recursos.

---

## Sugestões de Melhoria

- **Filtros Avançados em Pesquisas**: Adicionar filtros como localização, faixa de preço e categorias para melhorar a experiência do cliente.
- **Notificações Automáticas**: Implementar notificações para ações como compras concluídas, denúncias revisadas e alterações no sistema.
- **Sistema de Avaliações**: Permitir que clientes avaliem fornecedores e produtos.
- **Rotas de API Webhooks**: Adicionar rotas para integração com sistemas de terceiros.

## Itens em cada Setor do banco

-----------------------------------------------------------------------------------------------------------------------------------------------------------

model **Fornecedor** {
  id          String   @id @default(cuid()) 
  nome        String
  email       String   @unique
  telefone    Int
  usuarioId   String   @unique
  usuario     Usuario  @relation(fields: [usuarioId], references: [id], name: "FornecedorToUsuario")
  produtos    Produto[]
  catalogos   Catalogo[]
  criadoEm    DateTime @default(now())
  atualizadoEm DateTime @updatedAt

  Localizacao Localizacao[]
}

model **Usuario** {
  id          String        @id @default(cuid()) 
  email       String        @unique
  nome        String
  telefone    Int
  role        Role          @default(USUARIO) 
  criadoEm    DateTime      @default(now())
  atualizadoEm DateTime     @updatedAt
  Localizacao Localizacao[]
  fornecedor  Fornecedor?   @relation(name: "FornecedorToUsuario")
}

model **Produto** {
  id        String  @id @default(cuid())  
  nome      String
  preco     Float
  disponivel   @default(true)
  Quantidade Int
  criadoEm  DateTime @default(now())
  atualizadoEm DateTime @updatedAt
  Catalogo Catalogo[]
  Fornecedor Fornecedor[]
}

model **Menu** {
  id        String  @id @default(cuid())  
  nome      String
  itens     Item[]
  criadoEm  DateTime @default(now())
  atualizadoEm DateTime @updatedAt
}

model **Item** {
  id        String   @id @default(cuid())  
  nome      String
  preco     Float
  menuId    String
  menu      Menu     @relation(fields: [menuId], references: [id])
  criadoEm  DateTime @default(now())
  atualizadoEm DateTime @updatedAt
}

model **Catalogo** {
  id        String   @id @default(cuid())  
  nome      String
  produtos  Produto[]
  criadoEm  DateTime @default(now())
  atualizadoEm DateTime @updatedAt

  Fornecedor Fornecedor[]
}

model **Localizacao** {
  id           String      @id @default(cuid()) // ID gerado automaticamente com cuid
  latitude     Float
  longitude    Float
  usuarioId    String?     // Opcional para usuários
  usuario      Usuario?    @relation(fields: [usuarioId], references: [id])
  fornecedorId String?     // Obrigatório para fornecedores
  fornecedor   Fornecedor? @relation(fields: [fornecedorId], references: [id])
  criadoEm     DateTime    @default(now())
  atualizadoEm DateTime    @updatedAt
}

