<template>
  <div class="container">
    <van-button plain type="primary" @click="goHome">朴素按钮</van-button>

    <router-view></router-view>
  </div>
</template>

<script setup>
import http from './serve/index'
import { useRoute } from 'vue-router'
const route = useRoute()

const goHome = async () => {

  const response1 = await http.get(
    "https://jsonplaceholder.typicode.com/todos/1"

  )





}
</script>
<style>
.container {
  width: 200px;
}
</style>
