function isEven(num) {
  if ((num & 1) === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
