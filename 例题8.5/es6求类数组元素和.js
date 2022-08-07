//将类似数组 p = [{ a: 1 }, { b: 2, c: 3 }, ...] 中的元素求和
var p = [{ a: 1 }, { b: 2, c: 3 }, { d: 4 }];
let total = 0;
for (const item of p) {
  //   console.log(item);
  for (let key in item) {
    total += item[key];
  }
}
console.log(total);
