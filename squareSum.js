function squareSum(numbers) {
  let squared = numbers.map(num => num * num)
  //console.log(squared)
  const sum = squared.reduce((a, b) => a + b, 0)
  console.log(sum)
}
squareSum([1, 2])
squareSum([0, 3, 4, 5])
