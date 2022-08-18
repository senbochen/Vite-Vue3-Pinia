<script lang="ts" setup>
import { ref } from 'vue'
const ButtonTypes = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text'] as const
defineOptions({
  name: 'CButton',
})

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
})
</script>

<template>
  <button :class="[type]" v-bind="$attrs"><slot></slot></button>
</template>

<style lang="less" scoped>
.color {
  background-color: aqua;
}
</style>
