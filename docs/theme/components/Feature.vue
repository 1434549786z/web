<script setup>
const props = defineProps({
  icon: Object
})

const isLocalSvg = computed(() => {
  return props.icon?.name?.endsWith('.svg')
})
</script>

<template>
  <div class="feature">
    <!-- SVG本地图标处理 -->
    <div v-if="isLocalSvg" class="icon-wrapper">
      <img 
        :src="icon.name" 
        :style="{ color: icon.color }"
        class="svg-icon"
      />
    </div>
    
    <!-- 原有Carbon图标处理 -->
    <component
      v-else
      :is="icon.name"
      :style="{ color: icon.color }"
      class="carbon-icon"
    />
    
    <div class="details">
      <!-- 其他内容保持不变 -->
    </div>
  </div>
</template>

<style>
/* 新增样式 */
.svg-icon {
  width: 2em;
  height: 2em;
  fill: currentColor; /* 使颜色继承外层设置的color */
}

.icon-wrapper {
  color: var(--vp-c-brand); /* 默认颜色 */
}
</style>