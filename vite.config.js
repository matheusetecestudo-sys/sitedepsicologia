import { defineConfig } from 'vite'

export default defineConfig({
  // Raiz do projeto — o index.html está aqui
  root: '.',
  build: {
    // Pasta de saída para o build de produção
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
})
