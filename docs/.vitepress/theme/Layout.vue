<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout: DefaultLayout } = DefaultTheme
import Disclaimer from './components/Disclaimer.vue'
</script>

<template>
  <DefaultLayout>
    <template #layout-bottom>
      <Disclaimer />
    </template>
  </DefaultLayout>
</template>