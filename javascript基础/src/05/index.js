//Javascript 中 分为 MacroTask(宏任务)  MicroTask(微任务)

// MacroTask 宏任务

// script全部代码、setTimeout、setInterval、I/O、UI Rendering 

// 微任务

// Process.nextTick、Promise、MutationObserver

console.log("script start");  // 1

async function async1(){
  await async2();
  console.log("async1 end"); //5
}

async function async2(){
  console.log("async2 end");  // 2
}

async1();

setTimeout(()=>{
  console.log("setTimeout"); // 8
},0);

new Promise(resolve=>{
  console.log("Promise");  // 3
  resolve();
}).then(()=>{
  console.log("promise1"); // 6
}).then(()=>{
  console.log("promise2"); // 7 
})

console.log("script end");  // 4 

