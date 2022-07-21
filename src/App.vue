<template>
  <div class="container">
    <button @click="add">朴素按钮</button>

    <router-view></router-view>
  </div>
</template>

<script setup>
import http from './serve/index'
import { debounce, thorret } from './serve/debounce'

const goHome = async () => {
  const response1 = await http.get("https://jsonplaceholder.typicode.com/todos/1")
}
const handleDebounce = thorret(goHome, 3000)
const add = thorret(goHome, 3000)


</script>
<style>
.container {
  width: 200px;
}
</style>
