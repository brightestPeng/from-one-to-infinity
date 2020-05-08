//模拟create方法的实现
Object.prototype._create = function (_this) {
  var F = function () {};
  F.prototype = _this;

  return new F();
};

//模拟 new 方法的实现
Object.prototype.createInstance = function (Constructor, ...args) {
  let instance = Object._create(Constructor);
  Constructor.call(instance, ...args);
  return instance;
};

// class Animals {
//   constructor(name) {
//     this.name = name;
//   }

//   cry(){
//     console.log("Animal cry");
//   }

//   run() {
//     console.log("Animal run");
//   }
// }


// const newAnimal = new Animals("Peng");


// class PengAnimal extends Animals{
//   constructor(name){
//     super(name);
//   }
// }

// console.log(newAnimal._create(newAnimal));