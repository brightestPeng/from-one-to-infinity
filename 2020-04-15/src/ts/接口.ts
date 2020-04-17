function printLabel(labelledObj:{ label:string }){
  console.log(labelledObj.label);
}

interface LabelValue{
  label?:string,
  name?:string,
}

function printLabel1(labelledObj:LabelValue){
  console.log(labelledObj.label);
}


//存在label属性即可
let myObbj = { size:10 ,label:"ss"}
printLabel(myObbj);

//存在并类型匹配即可
//以对象传入正常
printLabel1(myObbj);
//以字面量传入 类型检测 报错
// printLabel1({ size:10 ,label:"ss"});
//解决办法
printLabel1({ size:10 ,label:"ss"} as LabelValue)

//只读属性
interface Point{
  readonly x:number
}

let point:Point = {x:1}
// point.x = 5;   报错

// readonly 与 const  变量使用const  属性使用readonly


interface LabelValue1{
  //必须属性
  label:string,
  //可选属性
  name?:string,
  //只读属性
  readonly x:number,
  //自定义属性
  [index:string]:any,

  //函数类型
  func:(a:string,b:string)=>boolean
}

interface ClockConstructor {
  new (hour:number,minute:number):any;
}

// class Clock implements ClockConstructor{
//   constructor(h:number,m:number){

//   }
// }

//类对接口的实现就是在说明这个类的实例会有什么。因为一个类的实例不会包含构造签名，所以它不能满足这个接口的要求
// 对构造函数的限制，只能通过函数实现

interface MyClass{
  name:string,
  getName:()=>string
}

interface MyClassConstructor{
  new (name:string):MyClass
}

function createClass(makeClass:MyClassConstructor,name:string){
  return new makeClass(name)
}

class class1 implements MyClass{
  public name = "2"
  getName(){
    return this.name
  }
}

let newClass = createClass(class1,"peng");

//继承接口
interface Shape{
  color:string
}
interface Others{
  color:string
}
interface Square extends Shape{
  side:boolean
}
interface OtherShape extends Shape,Others{

}

class Control{
  private state:any
}

interface SelectControl extends Control{
  select():void
}

class Button extends Control implements SelectControl {
  getName(){
    // return this.state
  }
  select(){

  }
}

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string | undefined;
  constructor(greeting?:string){
    this.greeting = greeting
  }
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter.standardGreeting;
      }
  }
}

class A{
  
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

console.log(typeof Greeter);
console.log(typeof A);

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());