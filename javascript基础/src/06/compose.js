import * as _ from "ramda";

//代码组合
// var compose = (f,g)=>{
//   return function(x){
//     return f(g(x))
//   }
// }

var toUpperCase = function (x) {
  return x.toUpperCase();
};
var exclaim = function (x) {
  return x + "!";
};

var shot = _.compose(exclaim, toUpperCase);

console.log(shot("Peng is a pig"));

// 使代码从右像左执行， 称之为左倾

// 结合律
_.compose(exclaim, _.compose(exclaim, toUpperCase)) ==
  _.compose(_.compose(exclaim, exclaim), toUpperCase);

var trace = function (tag) {
  return function (x) {
    console.log(tag, x);
    return x;
  };
};
var CARS = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
];

// 练习

var isLastInStock = _.compose(_.prop("in_stock"), _.last);

// 练习 2:
// ============
// 使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name

var nameOfFirstCar = _.compose(_.prop("name"), _.head);

console.log(nameOfFirstCar(CARS));

// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
var _average = function (xs) {
  return reduce(add, 0, xs) / xs.length;
}; // <- 无须改动

// var averageDollarValue = function(cars) {
//   var dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };

var averageDollarValue = _.compose(
  _average,
  _.map(function (c) {
    return c.dollar_value;
  })
);

// 练习 4:
// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。

var _underscore = _.replace(/\W+/g, "_"); //<-- 无须改动，并在 sanitizeNames 中使用它

var sanitizeNames = _.compose(_.map(_.compose(_.toLower, _underscore)));

console.log(sanitizeNames(["Hello World"]));

// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

// var availablePrices = function(cars) {
//   var available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value);
//   }).join(', ');
// };

var availablePrices = _.compose(
  _.join(","),
  _.map(function (x) {
    return accounting.formatMoney(x.dollar_value);
  }),
  _.filter(_.prop("in_stock"))
);


// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()

// var fastestCar = function(cars) {
//   var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//   var fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// };

var _append = _.flip(_.concat);

var fastestCar = _.compose(_append(' is the fastest'),_.prop("name"),_.last,_.sortBy(_.prop("horsepower")))


console.log(fastestCar(CARS));