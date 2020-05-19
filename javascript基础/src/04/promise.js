
import MyPromise from "./_promise";

// new MyPromise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("1秒钟过去了");
//         resolve("1111");
//         reject("错误");
//     },5000)
// }).then((data)=>{
//     console.log(data);
// }).then(()=>{
//     console.log("2222");
// }).catch((err)=>{
//     console.log(err);
// })


// new MyPromise((resolve,reject)=>{
//     console.log(22222);
//     setTimeout(()=>{
//         resolve(3333)
//     },0)
   
// }).then((data)=>{
//     console.log(33333);
// }).then(()=>{
//     console.log(44444);
// })

// new MyPromise((resolve,reject)=>{
//     console.log(55555);
//     resolve(6666)
// }).then((data)=>{
//     console.log(66666);
// })



new Promise((resolve,reject)=>{
    console.log(22222);
    setTimeout(()=>{
        resolve(3333)
    },0)
   
}).then(function(){
    return this;
}).then((data)=>{
    console.log(data);
})

new Promise((resolve,reject)=>{
    console.log(55555);
    resolve(6666)
}).then((data)=>{
    console.log(66666);
})