Function.prototype._bind = function (_that) {
  var _this = this;
  var _arguments = Array.prototype.slice.call(arguments, 1);

 

  var F = function () {
    var _innerArguments = Array.prototype.slice.call(arguments, 0);
    return _this.apply(this instanceof _this?this:_that, _arguments.concat(_innerArguments))
  };

  //使用中转函数，避免修改F.prototype 影响  _this。prototype
  var Fuc = function(){};
  Fuc.prototype = _this.prototype;
  F.prototype = new Fuc();

  return F;
};

Window.name = "Window";

var obj = {
  name: "obj",
};

function getName(age, name) {
  console.log(this);
  console.log(this.name);
  console.log(age);
  console.log(name);
}

getName.prototype.test = ()=>{
  return "test"
}

let GetName = getName._bind(obj, 27, "Peng");
let GetName1 = getName.bind(obj, 27);

GetName.prototype.test1 = "666"

// console.log(new GetName());
console.log(new GetName1("Peng1"));

// GetName();

function GetName2(name) {
  this.name = name;
}

// console.log(new GetName2("epng"));
