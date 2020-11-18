function evenOrOdd(str) {
  let separateNumber = str.toString().split('')
  //console.log(separateNumber)
  let number = separateNumber.map(num => parseInt(num))
  //console.log(number)
  let evenNumber = number.filter(num => num % 2 == 0)
  let oddNumber = number.filter(num => num % 2 !== 0)
  //console.log(oddNUmber, evenNumber)
  let sumEven = evenNumber.reduce((a, b) => a + b, 0)
  let sumOdd = oddNumber.reduce((a, b) => a + b, 0)
  //console.log(sumEven, sumOdd)
  if (sumEven > sumOdd) {
    console.log('Even is greater than Odd')
  } else if (sumOdd > sumEven) {
    console.log('Odd is greater than Sum')
  } else {
    console.log('Even and Odd are the same')
  }
}

evenOrOdd(123)
