Function.prototype._bind = function(_this){
  var _this = _this || Window;
  _this.fn = this;
  var _arguments = Array.prototype.splice.call(arguments,1,arguments.length);


  var F = function(){
    return _this.fn.apply(_this,_arguments)
  }

  F.constructor = this;




  return F;
}

Window.name = "Window";

var obj = {
  name:"obj"
}

function getName(age,name){
  console.log(this.name)
  console.log(age);
  console.log(name);
}

let GetName = getName._bind(obj,27,"Peng");
let GetName1 = getName.bind(obj,27,"Peng");

console.log(new GetName());
console.log(new GetName1());

function GetName2(name){
  this.name = name;
}

console.log(new GetName2("epng"));