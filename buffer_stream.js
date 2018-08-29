const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
  const start = Date.now();

  ctx.req.on('data', function(chunk) {
    console.log(chunk);
  });

  await new Promise((res)=>{
    setTimeout(()=>{
      res();
    }, 0)
  })
  
  await next();
  const ms = Date.now() - start;

  ctx.set('x-time', `${ms}ms`);
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
app.use(ctx => {
  if (ctx.request.path == '/') {
    return ctx.body = `<form action="/upload" method="post" enctype="multipart/form-data"><input type="file" name="file"><input type="hidden" name="test_key" value="test_value"><input type="submit"></form>`;
  } else {
    const chunks = [];
    let size = 0;
    ctx.req.on('data', function(chunk) {
      chunks.push(chunk);
      size += chunk.length;
    });
    ctx.req.on('end', function() {
      const buffer = Buffer.concat(chunks, size);

      const rems = [];
      //根据\r\n分离数据和报头
      for (var i = 0; i < buffer.length; i++) {
        var v = buffer[i];
        var v2 = buffer[i + 1];
        if (v == 13 && v2 == 10) {
          rems.push(i);
        }
      }

      const picmsg_1 = buffer.slice(rems[0]+2,rems[1]).toString();
      console.log(chunks.toString(), rems, picmsg_1);
    })
    // this.body = ctx.req.pipe(fs.createWriteStream('buffer_stream.jpeg'));
  }

});

app.listen(3000);