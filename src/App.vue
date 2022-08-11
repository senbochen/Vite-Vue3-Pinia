<template>
  <div class="container">
    <c-button @click="add" type="color">朴素按钮</c-button>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import http from './serve/index'
import { debounce, thorret } from './serve/debounce'
import CButton from '@/components/Button/index.vue'

defineOptions({
  name: 'App',
  components: {
    CButton
  }
})

const goHome = async () => {
  console.log(import.meta.env.VITE_SOME_KEY)
  const response1 = await http.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
}

const a = 1
const handleDebounce = thorret(goHome, 3000)
const add = thorret(goHome, 3000)
</script>
<style>
.container {
  width: 200px;
}
</style>
