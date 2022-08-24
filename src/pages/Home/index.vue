<template>
  <div></div>
</template>
<script lang="ts" setup>
const promise = () => {
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
</script>
<style lang="less" scoped>
.warp {
  color: #fff;
}
</style>
