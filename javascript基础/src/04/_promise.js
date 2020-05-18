MyPromise.PENDING = "penging";
MyPromise.FULFILLED = "fulfilled";
MyPromise.REJECTED = "rejected";

class MyPromise {

  constructor(fuc) {
    this.fucList = [];
    if(fuc){
        this.fucList.push(fuc);

        this.fucList.forEach(cb=> cb())
    }
  }

  then(){

  }

  resolved(value) {

  }
  
  rejected(reason) {

  }
  
  deferred() {}
}

module.exports = new MyPromise();
