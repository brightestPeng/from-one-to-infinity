//promise

// 1、promise 必须接受一个参数作为函数
// 2、promise 存在 pending fulfilled rejected 三种状态，状态改变后，会一直保持这个状态
// 3、支持链式调用，then调用后会返回一个新promise

const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const PENDING = "pending";

function resolvePromise(promise2, x, resolve, rejected) {
  if (promise2 === x) {
    return rejected(new TypeError("循环引用"));
  }

  if (x !== null && (typeof x === "function" || typeof x === "object")) {
    let called;
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, rejected);
          },
          (err) => {
            if (called) return;
            called = true;
            rejected(err);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      rejected(error);
    }
  } else {
    resolve(x);
  }
}

class MyPromise {
  constructor(excutor) {
    this.resolveCB = [];
    this.rejectedCB = [];

    this.reason = undefined;
    this.value = undefined;

    this.state = PENDING;
    this.resolve = this.resolve.bind(this);
    this.rejected = this.rejected.bind(this);
    try {
      excutor(this.resolve, this.rejected);
    } catch (err) {
      this.rejected(err);
    }
  }

  then(onResolve, onRejected) {
    let promise2;

    onResolve = typeof onResolve === "function" ? onResolve : (x) => x;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    if (this.state === PENDING) {
      promise2 = new MyPromise((resolve, rejected) => {
        this.resolveCB.push(() => {
          setTimeout(() => {
            try {
              let x = onResolve(this.value);

              resolvePromise(promise2, x, resolve, rejected);
            } catch (error) {
              rejected(error);
            }
          }, 0);
        });

        this.rejectedCB.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);

              resolvePromise(promise2, x, resolve, rejected);
            } catch (error) {
              rejected(error);
            }
          });
        });
      });
    }

    if (this.state === FULFILLED) {
      promise2 = new MyPromise((resolve, rejected) => {
        setTimeout(() => {
          try {
            let x = onResolve(this.value);

            resolvePromise(promise2, x, resolve, rejected);
          } catch (error) {
            rejected(error);
          }
        }, 0);
      });
    }

    if (this.state === REJECTED) {
      promise2 = new MyPromise((resolve, rejected) => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);

            resolvePromise(promise2, x, resolve, rejected);
          } catch (error) {
            rejected(error);
          }
        }, 0);
      });
    }

    return promise2;
  }

  //语法糖 简写
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  resolve(value) {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.resolveCB.forEach((cb) => cb());
    }
  }

  rejected(reason) {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.rejectedCB.forEach((cb) => cb());
    }
  }
}

MyPromise.all = (promiseArgs) => {
  return new MyPromise((resolve, reject) => {
    let count = 0;
    let dataArgs = [];
    for (let i = 0; i < promiseArgs.length; i++) {
      promiseArgs[i].then((data) => {
        dataArgs[i] = data;
        if (++count === promiseArgs.length) {
          resolve(dataArgs);
        }
      }, reject);
    }
  });
};

MyPromise.race = (promiseArgs) => {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promiseArgs.length; i++) {
      promiseArgs[i].then(resolve, reject);
    }
  });
};

MyPromise.promisefy = (fn)=>{
    return ()=>{
        let args = Array.prototype.slice.call(arguments);
        return new MyPromise((resolve,reject)=>{
            fn.apply.call(null,args.concat((err)=>{
                if(err){
                    reject(err)
                }
                resolve(arguments[1]);
            }))
        })
    }
}

let a = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("A");
  }, 5000);
});

let b = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("B");
  }, 500);
});

MyPromise.race([a, b])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// 执行测试用例需要用到的代码
MyPromise.deferred = function () {
  let defer = {};
  defer.promise = new MyPromise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
};

module.exports = MyPromise;
