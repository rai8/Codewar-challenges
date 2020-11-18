function abbrevName(name) {
  return name
    .split(' ')
    .map(n => n.charAt(0).toUpperCase())
    .join('.')
}
console.log(abbrevName('Sam Harris'))
