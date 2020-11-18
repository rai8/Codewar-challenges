const missingLetter = array => {
  str = array.join('')
  let startCode = str.charCodeAt(0)
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== startCode) {
      return String.fromCharCode(startCode)
    } else {
      startCode++
    }
  }
}
console.log(missingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(missingLetter(['O', 'Q', 'R', 'S']))
