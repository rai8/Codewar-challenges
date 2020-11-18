function openOrSenior(data) {
  data.map(d => {
    d[0] >= 55 && d[1] > 7 ? console.log('Senior') : console.log('Open')
  })
}

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
])
/* openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [54, 23],
])
openOrSenior([
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
]) */
