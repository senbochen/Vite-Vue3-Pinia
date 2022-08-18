//防抖函数
export const debounce = (fun: Function, delay: number) => {
  let timer: any
  return function (this: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fun.apply(this, arguments)
    }, delay)
  }
}

//节流函数
export const thorret = function throttle(fun: Function, time: number) {
  let t1 = 0 //初始时间
  return function (this: any) {
    let t2: any = new Date() //当前时间
    if (t2 - t1 > time) {
      fun.apply(this, arguments)
      t1 = t2
    }
  }
}
