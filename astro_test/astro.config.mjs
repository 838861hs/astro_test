import { defineConfig } from 'astro/config';
import removeCommentsPlugin from './remove-comments-plugin.js';
import viteConfig from './vite.config.js'; // Viteの設定をインポート

export default defineConfig({
  vite: {
    ...viteConfig, // Viteの設定をマージ
    plugins: [removeCommentsPlugin()],
  },
});
