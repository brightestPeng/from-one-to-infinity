//一个组件可以创建可重用的组件，支持多种类型的数据

//传入类型与返回类型相同
//传入与返回类型不一定相同
function identity(args:any):any{
  return args
}

//使用泛型实例
function identity1<A>(args:A):A{
  return args
}

//把T当作类型组成的一部分
function arrayIdentity<T>(arg:Array<T>):Array<T>{
  return arg;
}

//泛型函数形态
function identity2<T>(arg:T):T{
  return arg
}

//箭头函数形式
let identity3:<T>(args:T)=>T = identity2

//字面量形式
let identity4:{<T>(arg:T):T} = identity2

//接口形式
interface Iidentity{
  <T>(args:T):T
}

let identity5:Iidentity = identity2

//传入具体的泛型类型
interface Iidentity1<T>{
  <T>(args:T):T
}

let identity6:Iidentity1<number> = identity2

// 泛型类  无法创建泛型枚举与泛型命名空间  作用于类的实例部分，静态部分无发限制
class B<T>{
  zeroValue:T;
  constructor(zeroValue:T){
    this.zeroValue = zeroValue;
  }
  add:(x:T,y:T)=>T = (x,y)=>{
    return x
  }
}

let newB = new B<number>(1);

newB.add = function(x,y){
  return x + y
}

interface ILength{
  length:number
}

//泛型约束
function fucA1<T extends ILength>(args:T):T{

  console.log(args.length);
  return args;
}

// fucA(3) //报错, 无length属性 确保属性K存在于T中

function fucB<T, K extends keyof T >(obj:T,key:K){
  return obj[key]
}

//泛型创建工厂函数
function create<T>(c:{new():T}):T{
  return new c();
}