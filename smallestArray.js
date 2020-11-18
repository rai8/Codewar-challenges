function findSmallestInt(args) {
  let sorted = args.sort((a, b) => a - b)
  let smallest = sorted[0]
  console.log(smallest)
}
findSmallestInt([78, 56, 232, 12, 8])
