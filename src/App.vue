<template>
  <div class="container">
    <c-button @click="add" type="color">朴素按钮</c-button>
    <ul>
      <li v-for="item in userList">
        <p>{{ item.name }}</p>
        <p>{{ item.age }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="item in nameList">
        <p>{{ item }}</p>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import http from './serve/index'
import CButton from '@/components/Button/index.vue'
import useStore from '@/stores/family/index'
import { computed } from 'vue-demi'
defineOptions({
  name: 'App',
  components: {
    CButton
  }
})

const useStoreState = useStore()
const userList = computed(() => useStoreState.userList)
const nameList = computed(() => useStoreState.nameList)
const add = () => {
  useStoreState.registerUser('121231', '21313')
  console.log('useStoreState', userList)
}
</script>
<style>
.container {
  width: 200px;
}
</style>
