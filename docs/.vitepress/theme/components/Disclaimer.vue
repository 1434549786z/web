<!-- 在 .vitepress/theme/components/Disclaimer.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const showDisclaimer = ref(false)

onMounted(() => {
  // 检查是否已经同意过
  const hasAccepted = localStorage.getItem('disclaimerAccepted')
  if (!hasAccepted) {
    showDisclaimer.value = true
    document.documentElement.style.overflow = 'hidden'
  }
})

const acceptDisclaimer = () => {
  localStorage.setItem('disclaimerAccepted', 'true')
  showDisclaimer.value = false
  document.documentElement.style.overflow = ''
}
</script>

<template>
  <div v-if="showDisclaimer" class="disclaimer-overlay">
    <div class="disclaimer-content">
      <h2>免责声明</h2>
      <div class="disclaimer-text">
        <p>1. 本站所有内容仅供参考学习，不承担任何责任</p>
        <p>2. 禁止将本站内容用于非法用途</p>
        <p>3. 继续访问即表示您同意以上条款</p>
      </div>
      <button @click="acceptDisclaimer">同意并继续</button>
    </div>
  </div>
</template>

<style scoped>
.disclaimer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.disclaimer-content {
  background: var(--vp-c-bg);
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.disclaimer-content h2 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
}

.disclaimer-text {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

button {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: var(--vp-button-brand-hover-bg);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>