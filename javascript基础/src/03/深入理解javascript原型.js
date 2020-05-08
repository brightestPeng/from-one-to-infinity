let obj = {
  a:1,
  b:2
}

console.log(obj);

var test = {
  get a(){
    return Object.getPrototypeOf(this);
  },
  set a(value){
    return Object.setPrototypeOf(this,value)
  }
}

console.log(test);

console.log("equal",test.a === test.__proto__);
console.log("equal",test.a);

//模拟原型属性查找算法

// 他们实现了一个属性访问的查找路径算法：

// 1）将 current 设置为 obj

// 2）检查 current 自身是否包含 name 属性，如果包含，则返回该值

// 3）将 current 设置为 obj 的隐式引用（即 prototype 对象）

// 4）若 current 为 null，返回 undefined

// 5） 否则回到步骤 2

const lookupProperty = function(object,propertyName){
  let current = object;

  if(current === null){
    throw new Error("object can not be null");
  }

  while(current){
    if(current.hasOwnProperty(propertyName)){
      return current[propertyName]
    }else{
      current = Object.getPrototypeOf(current)
    }
  }

  return undefined;
}

console.log(lookupProperty({},"toString") === Object.prototype.toString);

console.log(Object.toString);
console.log(Object.prototype.toString === Object.toString);

//两种继承方式

//显示继承 与 隐式继承

//显示继承

var  obj_a  = { a:1 };
var  obj_b  = { b:1 };

// setPrototypeOf();
Object.setPrototypeOf(obj_b,obj_a);
console.dir(obj_b)

var obj_b = Object.create(obj_a);

console.dir(obj_b);

function test1(){

}

console.dir(test1)