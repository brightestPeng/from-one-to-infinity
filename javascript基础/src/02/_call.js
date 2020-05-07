
// 缺失 当_this为原始值的处理办法

Function.prototype._call = function (_this) {
  // if(_this === null || _this === undefined){
  //   _this = window
  // }
  var _this = _this || window;
  _this.fn = this;

  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  // 使用es6的方法
  // _this.fn(...args);
  // 使用es3的语法
  var result = eval("_this.fn(" + args + ")");

  delete _this.fn;

  return result;
};

window.name = "window";

function getName(age, test) {
  console.log(this);
  console.log(this.name);

  console.log(age);
  console.log(test);
}

let obj = {
  name: "obj",
};

//当 this为原始值  报错 
// getName._call(2, 12, "a");

//当 this为undefined 或 null  this指向window
getName._call(undefined,12, "a");

//当 this为对象  正常
getName._call(obj, 12, "a");

