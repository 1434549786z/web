import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue' // 使用相对路径

export default {
  ...DefaultTheme,
  Layout  // 正确继承默认布局
}