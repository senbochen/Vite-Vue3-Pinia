<script lang="ts" setup>
import { ref } from 'vue'
const ButtonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text'
] as const
defineOptions({
  name: 'CButton'
})

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  }
})

const count = ref(0)

const add = () => {
  count.value++
}

console.log(props)
</script>

<template>
  <button @click="add" :class="[type]" v-bind="$attrs"><slot></slot></button>
</template>

<style lang="less" scoped>
</style>
