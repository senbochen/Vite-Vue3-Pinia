<template>
  <div class="container">
    <van-button plain type="primary" @click="goHome">朴素按钮</van-button>

    <h1>{{ checked }}</h1>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const checked = ref('爱思大蛇多啊敖德萨a');
const router = useRouter()
const goHome = () => {
  router.push({
    path: '/car'
  })
}
</script>
<style>
.container {
  width: 200px;
}
</style>
