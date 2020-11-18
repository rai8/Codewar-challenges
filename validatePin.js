function validatePIN(pin) {
  //return true or false
  //let numbers = /^[0-9]+$/
  let num = /^(\d{4}|\d{6})$/
  /*if (pin.match(numbers)) {
    if (pin.length == 4 || pin.length == 6) {
      return true
    } else {
      return false
    }
  } else {
    return false
  } */
  return num.test(pin)
}

console.log(validatePIN('1111'))
console.log(validatePIN('000000'))
console.log(validatePIN('12454'))
console.log(validatePIN('12454.76'))
