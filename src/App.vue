<template>
  <div class="container">
    <button @click="add">朴素按钮</button>

    <router-view></router-view>
  </div>
</template>

<script setup>
import http from './serve/index'
import { debounce, thorret } from './serve/debounce'
import { ExtractPropTypes, defineProps } from "vue"
const buttonProps = defineProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  icon: {
    type: iconPropType,
    default: '',
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button',
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => Loading,
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
})
/** 组件 Props 类型, ExtractPropTypes 可将 Constructor 转换为对应值类型 */
type Props = ExtractPropTypes<typeof buttonProps>
const goHome = async () => {
  console.log(import.meta.env.VITE_SOME_KEY)
  const response1 = await http.get("https://jsonplaceholder.typicode.com/todos/1")
}

const a: Props = 1
const handleDebounce = thorret(goHome, 3000)
const add = thorret(goHome, 3000)


</script>
<style>
.container {
  width: 200px;
}
</style>
