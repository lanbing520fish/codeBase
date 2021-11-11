// 宏任务 && 微任务 队列

setTimeout(() => {
    console.log('0==', 'settimeout');
}, 0);

let a = setInterval(() => {
    console.log('0==', 'setInterval');
    clearInterval(a);
}, 0);

let promiseObj = new Promise((resolve, reject) => {
    console.log('2==', 'promise打印的');
    resolve(3)
})

promiseObj.then(res => {
    console.log('3==', 'promise.then打印的');
    return 4
}).then(res => {
    console.log('4==', 'promise.then打印的');
    return 5
}).then(res => {
    console.log('5==', 'promise.then打印的');
    return 6
}).then(res => {
    console.log('6==', 'promise.then打印的');
})



console.log('1==',  '');