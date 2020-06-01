import * as _ from "ramda";
import moment from "moment";

function Right(value){
  this._value = value
}

Right.of = function(value){
  return new Right(value);
}

Right.prototype.map = function(f){
  return Right.of(f(this._value))
}


function Left(value){
  this._value = value;
}

Left.of = function(value){
  return new Left(value);
}

Left.prototype.map = function(){
  return this;
}

console.log(Right.of("rain").map(function(str){ return "b"+str })); 

console.log(Left.of("rain").map(function(str){ return "b"+str }));

console.log(Right.of({ host:"localhost",port:80 }).map(_.prop("host")));

console.log(Left.of("rolls eyes").map(_.prop("host")));


var getAge = _.curry(function(now,user){
  var birthDate = moment(user.birthDate,"YYYY-MM-DD");
  if(!birthDate.isValid()) { return Left.of("Birth date could not be parsed") };
  return Right.of(now.diff(birthDate,"years"))
});

console.log(getAge(moment())({ birthDate:"1993-10-18" }));

console.log(getAge(moment(),{ birthDate:"balloons!" }));


// 使用either函数来进行错误处理

var either = _.curry(function(f,g,e){
  switch(e.constructor){
    case Left: return f(e._value)
    case Right: return g(e._value)
  }
})



