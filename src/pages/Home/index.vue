<template>
  <div>
    <h1>我是首页</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  setup: () => {
    let p = new Promise((resolve, reject) => {
      let num = Math.random() - 0.5
      setTimeout(() => {
        if (num > 0) {
          resolve('成功')
        } else {
          reject('失败')
        }
      }, 5000)
    })
    p.then((result) => {
      console.log(result)
    }).catch((reject) => {
      console.log(reject)
    })
  }
})
</script>
<style lang="less" scoped>
</style>
