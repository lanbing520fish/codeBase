let promise = new MyPromise((resolve, reject) => {
  reject('01293401')
});

promise.then().then().then().then().then((res) => {
  console.log(res)
  throw Error('Error')
}, (reason) => {
  console.log(reason)
  throw Error('Error')
})
.catch((e) => {
  console.log(e, 'e')
})