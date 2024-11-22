import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),    // 动态生成 目录的别名
      'components': path.resolve(__dirname, 'src/components'),    // 动态生成 src/components 目录的别名
      'utils': path.resolve(__dirname, 'src/utils'), // src/utils 的别名
      // '@mui/styled-engine': '@mui/styled-engine-sc', // 添加 MUI 样式引擎别名
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       // 在这里注入全局变量、mixins 或者定义路径
  //       additionalData: `@import "@/styles/variables.less";`
  //     },
  //   },
  // },
})
