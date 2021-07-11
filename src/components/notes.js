const Promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'))
  reject('fail')
})

promise.then((data) => console.log(data)).catch((data) => console.log(data))
