import { luiPlugin } from '@lui-ui/lui-tailwindcss'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))
module.exports = {
  content: [
    join(currentDir, './node_modules/@lui-ui/lui-vue/dist/**/*.{vue,js,jsx,mjs,ts,tsx,vue}')
  ],
  plugins: [
    luiPlugin(),
  ],
};