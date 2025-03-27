import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue' // 使用相对路径
import './style/background.css'

export default {
  ...DefaultTheme,
  Layout  // 正确继承默认布局
  ,enhanceApp({ app }) {
    // 可添加背景切换组件
  }
}