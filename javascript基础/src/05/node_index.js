const fs = require("fs");
const path = require("path");

// setImmediate(()=>{
//   console.log("immediate");
// })

// //宏任务
// setTimeout(()=>{
//   console.log("setTimeout");
// },0)

// new Promise((resolve)=>{
//   console.log("promise");
//   resolve();
// }).then(()=>{
//   //微任务
//   console.log("promise1");
// }).then(()=>{
//   //微任务
//   console.log("promise2");
// })

// fs.readFile(path.resolve(__dirname,"./index.js"),()=>{
//   console.log("fs callback");
// })

// timer 阶段   执行所有 setTimeout setInterval  再依次执行 microTask

// console.log("start");

// setTimeout(()=>{
//   console.log("setTimeout1");   // 1
//   Promise.resolve().then(()=>{
//     console.log("promise1");    // 3
//   }).then(()=>{
//     console.log("promise2");    // 5
//   })
// },0)

// setTimeout(()=>{
//   console.log("setTimeout2"); // 2
//   Promise.resolve().then(()=>{
//     console.log("promise21"); //4
//   }).then(()=>{
//     console.log("promise22"); // 6
//   })
// },0)

// Promise.resolve().then(()=>{
//   console.log("promise0");
// })

// setImmediate(()=>{
//   console.log("setImmediate");
// })

// console.log("end");

// poll阶段 => 执行完毕 会立刻进入check (setImmediate)  => timer阶段

// fs.readFile(path.resolve(__dirname, "./index.js"), () => {
//   setTimeout(() => {
//     console.log("setTimeout");
//     Promise.resolve()
//     .then(() => {
//       console.log("promise1"); // 3
//     })
//     .then(() => {
//       console.log("promise2"); // 5
//     });
//   }, 0);
  
//   setTimeout(()=>{
//     console.log("setTimeout1");
//   },0)

//   setImmediate(() => {
//     console.log("setImmediate");

//     Promise.resolve()
//       .then(() => {
//         console.log("promise21"); // 3
//       })
//       .then(() => {
//         console.log("promise22"); // 5
//       });
//   });
// });

// process.nextTick   //优先于其他任何微任务执行

setTimeout(()=>{
  Promise.resolve().then(()=>{
    console.log("promise");
  }).then(()=>{
    console.log("promise1");
  })

  process.nextTick(()=>{
    console.log("nextTick1");
    process.nextTick(()=>{
      console.log("nextTick2");
    })
  })
})

// Node事件循环  microTask在每个阶段执行事件执行完成后执行，nextTick优先于所有微任务
// 浏览器端   microTask 在marcoTask执行完成后执行