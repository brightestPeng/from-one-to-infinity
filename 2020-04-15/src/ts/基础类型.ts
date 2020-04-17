// 1、boolean类型

let isDonw: boolean = false;

// 2、number类型 所有数字都是浮点类型

//十进制
let decLiteral: number = 6;
//二进制
let decLiteralBinary: number = 0b1010;
//八进制
let octalLiteral: number = 0o744;
//十六进制
let hexLiteral: number = 0xf00d;

// 3、string 类型
let name: string = "bob";

//模板字符串
let greet: string = `Hi,My name is ${name}`;

// 4、数组
let list: number[] = [1, 2, 3];
let list1: Array<number> = [];

// 5、元组  已知数量和类型的数组
let x: [string, number] = ["11", 2];

//已知索引 获得正确索引类型
console.log(x[0].substr(1));
console.log(x[1].toFixed(0));

//未知索引  会使用联合类型

// 6、枚举类型  标准数据类型的补充
enum Color {
  Red=1,
  Green,
  Blue,
}

//编译后
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 1] = "Red";
//     Color[Color["Green"] = 2] = "Green";
//     Color[Color["Blue"] = 3] = "Blue";
// })(Color || (Color = {}));

// Color = { 1: "Red", 2: "Green", 3: "Blue", Blue: 3, Green: 2, Red: 1 };

// 7、Any类型  与  Object类型 区别  都可以赋任意值  但Object不可调用任意方法

let noSure:any = 4;
noSure.toFixed();

let prettySure:Object = 4;
// prettySure.toFixed()   报错

// 8、void类型  表示无任何类型，无返回值
function warnUser():void{
  console.log("This is my warning message");
}

//只能赋值 undefined
let noUser:void = undefined;

// 9、Null 和 Undefined  --strictNullChecks 下只能赋值给 本身及void  
let u:undefined = undefined;
let u1:null = null;

//使用联合类型赋值
let us:string | undefined = undefined;

// 10、Never 是任何类型的子类，可赋值给任何类型；但 只有never可赋值给never

/**
 * 1、函数无返回值
 * 2、总会抛出异常
 * 3、存在无法到达的终点
 */

 // 11、Object类型  除number、string、boolean、symbol、null和undefined之外的类型

declare function create(o:object | null):void;
create({ prop:0 })
create(null)

 // 12、类型断言
 let someValue:any = "this is a string";

 let strLength:number = (<string>someValue).length;

 let strLength1:number = (someValue as string).length;