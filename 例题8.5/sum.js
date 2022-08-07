function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
function curry(fn) {
  return function sum(...args) {
    if (args.length < fn.length) {
      return function () {
        return sum(...args, ...arguments);
      };
    }
    return fn(...args);
  };
}

let curried = curry(sum);
console.log(curried(1)(2)(3)(4)(5));
