Function.prototype._apply = function (_this, _args) {
  var _this = _this || Window;
  _this.fn = this;

  var result;
  if (!_args) {
    result = _this.fn();
  } else {
    var args = [];
    for (var i = 0; i < _args.length; i++) {
      args.push("_args[" + i + "]");
    }

    result = eval("_this.fn(" + args + ")");
  }

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
getName._apply(undefined,[12, "a"]);

//当 this为对象  正常
getName._apply(obj,[12, "a"]);