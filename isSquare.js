var isSquare = function (n) {
  if (n % Math.sqrt(n) === 0) {
    return true
  } else {
    return false
  }
}
console.log(isSquare(4))
console.log(isSquare(0))
console.log(isSquare(3))
