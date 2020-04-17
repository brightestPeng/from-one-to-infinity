/**
 * 语言分为静态语言 与 动态语言
 * 
 * 静态语言  编译时进行类型检测  编写高可靠性的程序 繁杂（ java ）
 * 
 * 动态语言  代码量少，专准逻辑  类型不确定，易出错 （javascript  ==>  typescript）
 * 
 */

/**
 * 动态语言  走路像鸭子，叫声像鸭子，那么它就是鸭子
 */

class duck{
  constructor(){
    this.name = "duck"
  }

  //鸭子叫声
  duckSinging() {
    console.log("嘎嘎嘎");
  }
}

class chicken{

  constructor(){
    this.name = "chicken"
  }

  //鸭子叫声
  duckSinging(){
    console.log("嘎嘎嘎");
  }
}

let choirs = []

function joinChoir(classType) {
  if(classType && typeof classType.duckSinging === "function" ){
    choirs.push(classType)

    console.log(`${classType.name}  加入合唱团`)
  }
}

joinChoir(new chicken());
joinChoir(new duck());