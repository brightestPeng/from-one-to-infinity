this.a = 10;

var obj = {
    a:20,
    c:this.a,
    getA:function(){
        console.log(this.a);
    }
}

console.log(obj.c);
console.log(obj.getA());

//严格模式 与 非严格模式  this 都指向 window

// console.log(this === window);
// console.log(this);

var doSth = function(name) {
    console.log(this);  // Number{2} Symbol{Symbol()} window
    console.log(name);
}

//非严格模式下
//指向原始值的包装类型
doSth.call(2,"若川")

// null 或 undefined 的this 自动指向window对象
doSth.call(undefined,"若川")

//
doSth.call(Symbol(),"若川")


var doSth2 = function(name) {
    "use strict"
    console.log(this); //2 Symbol() null
    console.log(name);
}

//严格模式下

//指向原始值
doSth2.call(2,"若川2")
doSth2.call(Symbol(),"若川2")

// 指向 undefined 或 null
doSth2.call(null,"若川")


function  Test(name) {
    this.name = name

    //返回原始值,自动指向新生成的对象
    // return 2
    //返回对象  指向对象
    // return {}
    //无返回，则自动指向新生成的对象
}

// return 2 时  返回 Test对象
console.log(new Test("A"));


//形参名字不能重复

function A(a,a,b) {
    console.log(a); // 2
}

A(1,2,3)

//报错
// const B = (a,a,b)=>{

// }