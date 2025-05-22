// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // ✅ 正确！部署到 Vercel 必须用 /
  plugins: [vue()]
})
