import _ ,{ split, filter, match } from "ramda";


// var words = function(str){
//   return split(" ",str);
// }

var words = split(" ");



console.log(split("-","a-b-c"));

var sentences = map(words);

var filterQs = filter(match(/q/i))

var _keepHighest = function(x,y){ return x >= y ? x : y; };

var max = reduce(_keepHighest,-Infinity)

var slice = _.curry(function(x,y,args){
  return args.slice(x,y);
})

var take = slice(0);