class MyPromise {
  constructor(excutor) {
    this.fucList = [];
    this.state = MyPromise.PENDING;

    this.value = undefined;
    this.reason = undefined;

    this.resolvedCB = [];
    this.rejectedCb = [];

    this.resolved = this.resolved.bind(this);
    this.rejected = this.rejected.bind(this);

    try {
      excutor(this.resolved, this.rejected);
    } catch (err) {
      this.rejected(err);
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === "function" ? onResolve : (y) => {};
    onReject =
      typeof onReject === "function"
        ? onReject
        : (err) => {
            throw err;
          };
    let promise2 = undefined;

    if (this.state === MyPromise.FULFILLED) {
      promise2 = new MyPromise((resolve, rejected) => {
        setTimeout(() => {
          try {
            let x = onResolve(this.value);
            this.resolvePromise(promise2, x, resolve, rejected);
          } catch (error) {
            rejected(error);
          }
        }, 0);
      });
    }
    if (this.state === MyPromise.REJECTED) {
      promise2 = new MyPromise((resolve, rejected) => {
        setTimeout(() => {
          try {
            let x = onReject(this.reason);
            this.resolvePromise(promise2, x, resolve, rejected);
          } catch (error) {
            rejected(error);
          }
        }, 0);
      });
    }

    if (this.state === MyPromise.PENDING) {
      promise2 = new MyPromise((resolve, rejected) => {
        this.resolvedCB.push(() => {
          setTimeout(() => {
            try {
              let x = onResolve(this.value);
              this.resolvePromise(x, promise2, resolve, rejected);
            } catch (error) {
              rejected(error);
            }
          }, 0);
        });

        this.rejectedCb.push(() => {
          setTimeout(() => {
            try {
              let x = onReject(this.reason);
              this.resolvePromise(x, promise2, resolve, rejected);
            } catch (error) {
              rejected(error);
            }
          }, 0);
        });
      });
    }

    return promise2;
  }

  catch(fuc) {
    this.rejectedCb.push(fuc);
    return this;
  }

  resolved(value) {
    setTimeout(() => {
      if (this.state === MyPromise.PENDING) {
        this.state = MyPromise.FULFILLED;
        this.value = value;
        this.resolvedCB.forEach((cb) => cb(value));
      }
    }, 0);
  }

  rejected(reason) {
    setTimeout(() => {
      if (this.state === MyPromise.PENDING) {
        this.state = MyPromise.REJECTED;
        this.reason = reason;
        this.rejectedCb.forEach((cb) => cb(reason));
      }
    }, 0);
  }

  resolvePromise(promise2, x, resolve, rejected) {
    if (x === promise2) {
      return rejected(new Error("循环引用"));
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
              this.resolvePromise(promise2, y, resolve, rejected);
            },
            (err) => {
              if (called) return;
              called = true;
              rejected(err);
            }
          );
        } else {
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

  deferred() {}
}

MyPromise.PENDING = "penging";
MyPromise.FULFILLED = "fulfilled";
MyPromise.REJECTED = "rejected";

export default MyPromise;
