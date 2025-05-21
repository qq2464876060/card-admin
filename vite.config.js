import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/card-admin/', // 👈 仓库名，确保和你的 GitHub 仓库名一致
  plugins: [vue()]
})
