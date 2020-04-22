// typescript 支持数字和基于字符串的枚举

//数字枚举
enum Direction{
  Up,
  Down,
  Left,
  Right
}

//字符串枚举 都需赋值
enum Direction1{
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

//异构枚举
enum Direction2{
  No=0,
  Yes="YES"
}

//枚举使用
function fucA(str:string,message:Direction):void{

}

function getNum() {
  return 1
}

enum test{
  B,
  C = getNum(),
  A = getNum(),
}