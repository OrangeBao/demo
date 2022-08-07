function myMatch(sourceStr) {
  let s = sourceStr
    .replace(
      /(\d{3})(\d*)/,
      ($, $1, $2) => $1 + " " + $2.replace(/\d{4}|\d+/g, ($) => $ + " ").trim()
    )
    .trim();
  return s;
}
let str = "13088889999";
console.log(myMatch(str));

function p() {
  console.log(this.a);
}
var a = 1;

var o = { a: 2 };

var t = { a: 3 };

o.p = p;
t.p = o.p;

// console.log(p());
// console.log(o.p());
// console.log(t.p());
p(); // ?
o.p(); // ?
t.p(); // ?
