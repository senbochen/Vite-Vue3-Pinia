<template>
  <div class="container">
    <c-button @click="add" type="color">朴素按钮</c-button>
    <router-view></router-view>
  </div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script lang="ts" setup>
import useStore from '@/stores/modules/family'
import CButton from '@/components/Button/index.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { thorret } from '@/utils/tools/index'
defineOptions({
  name: 'App',
  components: { CButton },
})

const useStoreState = useStore()
const userList = computed(() => useStoreState.userList)
const nameList = computed(() => useStoreState.nameList)
const route = useRouter()
const getInfo = () => useStoreState.registerUser('121231', '21313')
const getInfor = thorret(getInfo, 30000)
const add = () => getInfor()
</script>
<style>
.container {
  width: 200px;
}
</style>
