//1 为什么 typeof 判断 null 是 Object 类型？

// 这属于javascript代码的bug，js变量以低位1-3位存储类型信息，000代表的位对象，而null代表空指针，所有机器码都为0，所以typeof null === object
// instanceof 判断 某类型的原型 是否在对象的原型链上

//2 Function 和 Object 是什么关系？

// constructor 和 __proto__为对象独有
// prototype 为 函数独有
// Function也为对象，不过为函数对象

//3 new 关键字具体做了什么？手写实现。

// 1、新建一个对象
// 2、调用构造函数，并把构造函数的this指向新对象；
// 3、把新对象的原型，指向构造函数的原型
// 4、如果返回值为非对象，则返回新对象， 如果为对象，则返回对象

//4 prototype 和__proto__是什么关系？什么情况下相等？

// prototype为一个隐式引用，es3 通过 getPrototypeOf 与 setPrototypeOf 获取与更新 prototype,
// __proto__提供了prototype的显示访问
// __proto__默认走的为 Object.prototype 的get/set方法
// Function.__proto__ = Function.prototype

//5 ES5 实现继承有几种方式，优缺点是啥
//6 ES6 如何实现一个类
//7 ES6 extends 关键字实现原理是什么
