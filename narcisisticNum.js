function narcissistic(value) {
  if (Number.isInteger(value)) {
    const sumDigits = value
      .toString()
      .split('')
      .map(val => Math.pow(val, value.toString().length))
      .reduce((a, b) => a + b)
    if (Number(sumDigits) == value) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
console.log(narcissistic(7))
console.log(narcissistic(371))
console.log(narcissistic('3b1'))
