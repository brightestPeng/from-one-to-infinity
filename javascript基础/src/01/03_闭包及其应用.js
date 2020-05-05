import moment from "moment";

//当外部作用域执行完毕后，内部函数还存活（仍在其他地方被引用）时，闭包才真正发挥其作用。

//Timer 定时器  x存活时长 定时器回调执行 或 clearTimeout() 被调用

(function autorun() {
  let x = 1;
  setTimeout(function name() {
    console.log(x);
  }, 1000);
})();

//Event 事件处理  x存活到 btn点击事件被移除
const clearBtn = document.createElement("button");
const addBtn = document.createElement("button");
clearBtn.innerHTML = "clear";
addBtn.innerHTML = "add";
document.body.appendChild(clearBtn);
document.body.appendChild(addBtn);

// (function () {
//   let x = 2;
//   btn.onclick = function () {
//     console.log(x);
//   };
// })();

//Ajax 一直存活到接收后端返回的结果，回调函数被执行

//闭包与循环

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     // 储存对i的引用
//     console.log(i);
//   }, 10);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     // 创建了新的局部变量
//     console.log(i);
//   }, 10);
// }

//闭包与封装性

//工厂模式与私有原型对象

//全局对象
// let todoPrototype = {
//   name: "123",
//   toString: function () {
//     return this.id + " " + this.userName + ": " + this.title;
//   },
// };

// function todo(todo) {
//   // newTodo.__proto__ = todoPrototype
//   let newTodo = Object.create(todoPrototype);
//   Object.assign(newTodo, todo);
//   return newTodo;
// }

//使用闭包  拥有私有状态的函数
// let Todo = (function createTodoFactory(){
//   //私有对象
//   let todoPrototype = {
//     name: "123",
//     toString: function () {
//       return this.id + " " + this.userName + ": " + this.title;
//     },
//   };

//   return function(todo){
//     let newTodo = Object.create(todoPrototype);
//     Object.assign(newTodo,todo);
//     return newTodo;
//   }
// })()

//工厂模式与私有构造函数

// let Todo = (function createTodoFactory(){
//   function Todo(spec){
//     Object.assign(this,spec)
//   }

//   return function(spec){
//     let todo = new Todo(spec);
//     return Object.freeze(todo);
//   }
// })()

// let todo = Todo({ title:"A description" })

//垃圾回收

function Todo(i) {
  this.name = i;
}

let add = (function createAddClosure() {
  let arr = [];
  return function (obj) {
    arr.push(obj);
  };
})();

function addObjects() {
  for (let i = 0; i <= 10000; i++) {
    add(new Todo(i));
  }
}

function clearObjects() {
  if (add) {
    add = null;
  }
}

addBtn.onclick = function () {
  addObjects();
};

clearBtn.onclick = function () {
  clearObjects();
};

//避免全局函数的工厂函数
// let loader = (function createLoader() {
//   let app = {};
//   let factory

//   app.factory = function (params) {
//     if(typeof params === "string"){
//       return function(){

//       }
//     }

//     return this;
//   };

//   app.start = function(){

//   }

//   function App(){
//     let factories = {};
//   }

//   App.prototype.factory = function(param){
//     if(typeof param === "string"){
//       return function(fn){
//         if(typeof fn === "function"){
//           this.factories[param][fn.name] = fn
//         }
//       }
//     }
//   }

//   App.prototype.start = function(){

//   }

//   return function () {
//     return app;
//   };
// })();

// let app = loader();

// for(var i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(moment().format("YYYY-MM-DD HH:mm:ss"),i)
//   },1000)
// }

// console.log(moment().format("YYYY-MM-DD HH:mm:ss"),i);

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(moment().format("YYYY-MM-DD HH:mm:ss"), i);
//   }, 1000);
// }

// console.log(moment().format("YYYY-MM-DD HH:mm:ss"), i);

//闭包的多种形式

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i, "1");
  }, 1000);
}

//最常见的
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i, "2");
    }, 1000);
  })(i);
}

//定时器的第三个参数
for (var i = 0; i < 5; i++) {
  setTimeout(
    function (i) {
      console.log(i, "3");
    },
    1000,
    i
  );
}

var output = function (i) {
  setTimeout(function () {
    console.log(i, "4");
  }, 1000);
};

//第三种
for (var i = 0; i < 5; i++) {
  output(i);
}

//第四种
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i, "5");
  }, 1000);
}

// for (var b = 0; b < 5; b++) {
//   let timer = setTimeout(function () {
//     console.log(b, "5");
//   }, 1000);
//   if(timer){

//   }
// }
// var b = 0;
// let timer = null;

// while (b < 5) {
//   if (!timer) {
//     timer = setTimeout(function () {
//       console.log(b, "6");

//       timer = null;
//       b = b + 1;
//     }, 1000);
//   }
// }

// console.log(b, "6");

//间隔一秒，输出1，2，3，4，5  异步，一定要想到promise
// let tasks = [];

// let fuc = function (i) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log(i, "7");
//       resolve();
//     }, 1000 * i);
//   });
// };

// for (var c = 0; c < 5; c++) {
//   tasks.push(fuc(c));
// }

// Promise.all(tasks).then(() => {
//   setTimeout(function () {
//     console.log(i, "7");
//   }, 1000);
// });

let fuc = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(i,"8");
      resolve();
    }, 1000);
  });
};

async function addFuc() {
  for (var i = 0; i <= 5; i++) {
    await fuc(i);
  }
}

addFuc();
