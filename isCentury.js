/* function centuryFromYear(year) {
  // Finish this :)

  if (year % 100 !== 0) {
    console.log(Math.round(year / 100) + 1)
  } else {
    console.log(Math.round(year / 100))
  }
} */
/* function century(year) {
  // Finish this :)
  let centuryTime = 0
  while (year > 0) {
    year = year - 100
    centuryTime = centuryTime + 1
  }
  console.log(centuryTime)
} */

const century = year => console.log(Math.ceil(year / 100))
century(1705) // returns (18)
century(1900) //returns (19)
century(1601) //returns (17)
century(2000) //returns (20)
century(89) //retrun 1
century(2020)
