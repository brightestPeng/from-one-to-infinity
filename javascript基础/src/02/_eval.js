
let args = ['A',2,3];
let A = "A";


console.log(args.toString());

eval("console.log("+args+")");


//如果为js代码  先把变量转换为字符串 再执行   直接解析执行

//如果为普通字符串   返回原字符串

//

//eval 性能测试

function f1() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
}

function f2() {
  eval("");
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
}

console.time();
// f1();
console.timeEnd();

console.time();
// f2();
console.timeEnd();