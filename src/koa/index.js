const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();


app.use(serve(path.join(process.cwd(), '/dist')));

app.use(async (ctx, next) => {

  ctx.body = fs.readFileSync(path.join(process.cwd(), '/dist/index.html'))
  ctx.type = 'html'
  next()
})
app.listen(3000, function () {
  console.log('看看这个路径', path.join(process.cwd(), 'dist/index.html'))
  console.log('Server listening at port 3000',);
});
