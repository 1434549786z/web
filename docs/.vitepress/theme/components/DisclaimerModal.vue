<template>
    <div v-if="showModal" class="disclaimer-overlay">
      <div class="disclaimer-modal">
        <h2>免责声明</h2>
        <div class="content">
          <p>请仔细阅读并同意以下协议...</p>
        </div>
        <button @click="acceptDisclaimer">同意</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const showModal = ref(false)
  
  // 客户端检测
  const isClient = typeof window !== 'undefined'
  
  const checkDisclaimerStatus = () => {
    if (isClient) {
      const hasAccepted = localStorage.getItem('hasAcceptedDisclaimer')
      showModal.value = !hasAccepted
    }
  }
  
  const acceptDisclaimer = () => {
    if (isClient) {
      localStorage.setItem('hasAcceptedDisclaimer', 'true')
      showModal.value = false
    }
  }
  
  onMounted(() => {
    checkDisclaimerStatus()
  })
  </script>
  
  <style scoped>
  .disclaimer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  .disclaimer-modal {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 600px;
  }
  </style>