;(function log() {
  console.log('tick')
  process.nextTick(log)
})()