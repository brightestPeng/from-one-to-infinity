/**
 * 多态
 * 
 * 把做什么及谁去做分开
 */

//  class Animal{
//    protected name:string;
//    constructor(theName:string){
//     this.name = theName;
//    }
//    makeSound(animal:Animal){

//    }
//  }

//  class Dog extends Animal{
//    constructor(){
//     super("dog");
//    }
//    getName(){
//      return this.name
//    }
//  }

// class Greeter {
//   static standardGreeting = "Hello, there";
//   greeting: string;
//   constructor(greeting:string){
//     this.greeting = greeting;
//   }
//   greet() {
//       if (this.greeting) {
//           return "Hello, " + this.greeting;
//       }
//       else {
//           return Greeter.standardGreeting;
//       }
//   }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());

