<script setup lang="ts">
defineOptions({
  name: 'CButton',
})
import { defineProps } from 'vue'
const ButtonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
]

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
})
</script>

<template>
  <button :class="[type]" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
.color {
  background-color: aqua;
}
</style>
