//类式继承

function SuperClass() {
  this.superValue = true;
  this.superTest = {
    name: "a",
  };
}

SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
};
SuperClass.prototype.setSuperValue = function (bool) {
  this.superValue = bool;
};

function SubClass() {
  this.SubValue = true;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getSubClass = function () {
  return this.SubValue;
};

const sub1 = new SubClass();
const sub2 = new SubClass();

// console.log(sub1);
// console.log(sub2);

// //属性共享
// sub1.superTest.name = "sub1"

// console.log(sub1);
// console.log(sub2);

//1、父类共享属性中的引用属性，会被所有子类共享，一改全部改变
//2、无法初始化父类构造函数

//构造函数继承

function SuperClass1(id) {
  this.superId = id;
}

SuperClass1.prototype.getId = function () {
  return this.superId;
};

function subClass1(id) {
  SuperClass1.call(this, id);
}

// 无法继承父类原型上的方法

//组合继承

function SuperClass2(id) {
  this.superId = id;
}

SuperClass2.prototype.getId1 = function () {
  return this.superId;
};

function SubClass2(id, name) {
  SuperClass2.call(this, id);
  this.name = name;
}

//父类构造函数调用两次
SubClass2.prototype = new SuperClass2();

SubClass2.prototype.getId = function () {
  return this.name;
};

console.dir(SuperClass2);
console.log(new SubClass2(4, "peng"));

//父类构造函数调用两次

//原型继承
function SuperClass3(id) {
  this.id = id;
}

SuperClass3.prototype.getId = function () {
  return this.id;
};

function inherit(id) {
  var F = function () {};

  F.prototype = new SuperClass3(id);

  return new F();
}


// 寄生继承
function createInerit(obj){
  let o = inherit(obj);

  obj.getName = function(name){
    console.log(name);
  }

  return o;
}


//寄生组合式继承

function SuperClass4(id) {
  this.superId = id;
}

SuperClass4.prototype.getId1 = function () {
  return this.superId;
};

function SubClass4(id, name) {
  SuperClass4.call(this, id);
  this.name = name;
}

//父类构造函数调用两次
let F = function(){};
F.prototype = new SuperClass4();
F.constructor = SubClass4;
SubClass4.prototype = new F();

SubClass4.prototype.getId = function () {
  return this.name;
};
