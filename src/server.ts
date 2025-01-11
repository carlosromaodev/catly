import { app } from './app'
import { env } from './env'
import { exibir } from './use-case/utils/exibir'

app
  .listen({
    port: 2222,
  })
  .then(() => {
    exibir.info('SERVIDOR NO AR')
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      exibir.fatal(`Erro ao iniciar o servidor: ${error.message}`)
    } else {
      exibir.fatal('Erro desconhecido ao iniciar o servidor')
    }
  })
