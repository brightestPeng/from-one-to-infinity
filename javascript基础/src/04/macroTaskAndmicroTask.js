// setTimeout  setInterval  为宏任务
// promise process.nextTick  为微任务

setTimeout(()=>{
    console.log(11111);
},0)

new Promise((resolve,reject)=>{
    console.log(22222);
    setTimeout(()=>{
        resolve(3333)
    },0)
   
}).then((data)=>{
    console.log(33333);
}).then(()=>{
    console.log(44444);
})

new Promise((resolve,reject)=>{
    console.log(55555);
    resolve(6666)
}).then((data)=>{
    console.log(66666);
})


setTimeout(()=>{
    console.log(77777);
},0)