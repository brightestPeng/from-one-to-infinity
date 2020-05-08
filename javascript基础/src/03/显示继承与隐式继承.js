//隐式继承中的组合继承

function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.cry = function () {
  console.log("Animal cry");
};

Animal.prototype.run = function () {
  console.log("Animal run");
};

function Snake(name, age, length) {
  Animal.call(this, name, age);
  this.length = length;
}

Snake.prototype.run = function () {
  console.log("Snake run");
};

Snake.prototype = new Animal();
Snake.prototype.constructor = Snake;

//显示继承

function Botang({ name, age }) {
  this.name = name;
  this.age = age;
}

Botang.prototype.position = function () {
  console.log("Botang position");
};

function Tree({ height }) {
  this.height = height;
}

Botang.prototype.position = function () {
  console.log("Tree position");
};

const inherit = function (superObj, currentObj) {
  let current = function (...args) {
    superObj.call(this, ...args);
    currentObj.constructor.call(this, ...args);
  };

  current.prototype = {
    ...currentObj,
    constructor: current,
  };

  Object.setPrototypeOf(current.prototype, superObj.prototype);

  return current;
};
