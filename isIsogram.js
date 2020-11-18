const isIsogram = str => {
  console.log(
    str
      .toLowerCase()
      .split('')
      .every((c, i) => str.toLowerCase().indexOf(c) == i)
  )
}

isIsogram('Dermatoglyphics')
isIsogram('aba')
isIsogram('moOse')
