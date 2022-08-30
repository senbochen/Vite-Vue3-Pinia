//防抖函数
export const debounce = (fun: any, delay: number) => {
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
export const thorret = (fun: any, time: number) => {
  let t1 = 0 //初始时间
  return function (this: any) {
    const t2: any = new Date() //当前时间
    if (t2 - t1 > time) {
      fun.apply(this, arguments)
      t1 = t2
    }
  }
}

// 1、对象分为函数对象和普通对象，prototype 属性是函数独有的属性
// 2、函数对象和普通对象都有一个属性__proto__,这个属性有2个值，__proto__,constructor 构造属性

// const jieliu = (func: any, time: number) => {
//   let startTime = 0
//   return function (this: any) {
//     const endTime = Date.now()
//     if (endTime - startTime > time) {
//       func.bind(this, arguments)
//       startTime = endTime
//     }
//   }
// }

// const fangdou = (func: any, time: number) => {
//   let timer: any
//   return function (this: any) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       func.bind(this, arguments)
//     }, time)
//   }
// }
