function getCount(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^aeiou]/gi, '').length
}
console.log(getCount('abracadabra'))
