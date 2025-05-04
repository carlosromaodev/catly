import { defineConfig } from 'vitest/config'
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
