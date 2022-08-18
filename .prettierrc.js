// .prettierrc.js
module.exports = {
  printWidth: 120, //每行代码长度
  tabWidth: 2, //每个tab相当于多少个空格（默认2）
  useTabs: false,
  semi: false, //在末尾是否加分号
  singleQuote: true,
  trailingComma: 'es5', //多行使用拖尾逗号(默认none)  none-无尾逗号  es5-添加ES5中被支持的尾逗号 all-所有可能的地方都添加
  bracketSpacing: true, //对象字面量的大括号间使用空格（默认true）eg:{name:'xiaoming'} => { name:'xiaoming' }
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  eslintIntegration: false,
}
