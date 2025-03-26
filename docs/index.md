---
layout: home

hero:
  name: 技术知识库
  text: 高效开发指南
  tagline: 聚焦核心知识，提升开发效率
  
  actions:
    - theme: brand
      text: 开始探索 →
      link: /guide/getting-started
    - theme: alt
      text: 测试按钮
      link: /guide/what-is-vitepress

features:
  - icon: ⚡
    title: 技术实践
    details: 日常开发最佳实践与解决方案
    link: https://baidu.com
    linkText: 查看案例
    customIcon: 
      name: carbon:code
      color: "#42b883"
  - icon: 
     src: /icons/FNnas.png
    title: 飞牛影视
    details: 个人托管影视
    link: https://fn.cgs.wiki:82
    linkText: 访问飞牛影视
    customIcon: 
      name: mdi:bookshelf
      color: "#647eff"
  - icon: 
     src: /icons/note.svg
    title: 学习笔记
    details: 核心技术知识点归档
    link: https://note.cgs.wiki:82
    linkText: 查阅笔记
    customIcon: 
      name: fa6-solid:lightbulb
      color: "#fcd535"
  - icon: 
     src: /icons/ai.svg
    title: OpenWebUi
    details: 个人自托管 AI 平台
    link: https://ai.cgs.wiki:82
    linkText: 前往
    customIcon: 
      name: carbon:code
      color: "#42b883"
---

<style>
/* 自定义卡片效果 */
:root {
  --vp-home-feature-icon-size: 48px;
}

.VPFeature {
  transition: transform 0.25s ease;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  padding: 24px;
}

.VPFeature:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.VPFeature .icon {
  margin-bottom: 16px;
}

.custom-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
}
</style>