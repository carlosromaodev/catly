import pino from 'pino'

export const exibir = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true, // Adiciona cores no log
      AnimationEffect: true,
    },
  },
})
