/**
 * 执行上下文类型
 * 
 * 1、全局执行上下文   
 * 2、函数执行上下文
 * 3、Eval函数执行上下文
 * 
 */

/**
 * 全局执行上下文 ( 任何不在函数内部的代码都在全局上下文中 )
 * 
 * 1、创建一个全局的window对象
 * 2、设置this的值等于这个全局对象
 */

function name(a) {

  console.log(a);

  function  a() {
    console.log(666);
  }

  console.log(a);
}

name(2);