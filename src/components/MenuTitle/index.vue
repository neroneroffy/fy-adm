<template>
  <div class="fy-title-primary">
    FY VUE ADM
  </div>
  <h2 class="fy-menu-title">{{title}}</h2>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  title: String
})

const state = reactive({ count: 0 })
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
