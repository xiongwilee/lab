const middlewares = [function(context, next) {
  context.test = context.test || 0;
  console.log(0, context.test)

  return next.then((context) => {
    context.test++;
    console.log(7, context.test)
    return context;
  })
}, function(context, next) {
  context.test++;
  console.log(1, context.test)

  return next.then((context) => {
    context.test++;
    console.log(6, context.test)
    return context;
  })
}, function(context, next) {
  context.test++;
  console.log(2, context.test)

  return next.then((context) => {
    context.test++;
    console.log(5, context.test)
    return context;
  })
}, function(context, next) {
  context.test++;
  console.log(3, context.test)

  return next.then((context) => {
    context.test++;
    console.log(4, context.test)
    return context;
  })
}];

compose(middlewares)({})

function compose(middleware) {

  return function(context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)

    function dispatch(i) {
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, function next() {
          return dispatch(i + 1)
        }))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}