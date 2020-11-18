function findShort(s) {
  let shortestString = s.split(' ').reduce((a, b) => (b.length > a.length ? a : b))
  return shortestString.length
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
