import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // разрешаем заходить по этому хосту
    allowedHosts: ['cms.mbudo-kashira.ru'],
    // и слушаем не только localhost
    host: true,
  },
});
