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
      text: AI界面
      link: /ai-chat


features:
  - icon: 
     src: /icons/filebox.svg
    title: 文件快递柜
    details: 匿名口令分享文本，文件，像拿快递一样取文件
    link: https://filebox.cgs.wiki:82/#/
    linkText: 前往
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
    link: https://aifree.cgs.wiki:82
    linkText: 前往
    customIcon: 
      name: carbon:code
      color: "#42b883"
  - icon: 
     src: /icons/sylogo.svg
    title: 思源笔记
    details: 自托管笔记平台
    link: https://synote.cgs.wiki:82
    linkText: 前往
    customIcon: 
      name: carbon:code
      color: "#42b883"
---

<style>
/* 自定义卡片效果 */
/* 渐变文字效果 */
.clip-text {
  background: linear-gradient(
    120deg,
    #42d392 25%, 
    #647eff
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

/* 响应式图片容器 */
@media (min-width: 960px) {
  .VPImage {
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.08));
    transition: filter 0.3s ease;
  }
  
  .VPImage:hover {
    filter: drop-shadow(0 16px 32px rgba(0,0,0,0.12));
  }
}

@media (max-width: 960px) {
  .clip-text {
    font-size: 2.5rem;
  }
  
  .VPImage {
    display: none;
  }
}

/* 布局调整 */
.VPHero {
  position: relative;
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}

.VPHero.has-image .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
}

.VPHero .main {
  flex: 1;
  max-width: 592px;
}

.VPHero .image-container {
  flex: 1;
  max-width: 480px;
}

</style>
<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  // 动态应用渐变文字
  const heroTitle = document.querySelector('.VPHomeHero .name')
  if (heroTitle) {
    heroTitle.innerHTML = `<span class="clip-text">${heroTitle.textContent}</span>`
  }
})
</script>
