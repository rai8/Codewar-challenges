function anagrams(word, words) {
  console.log(words.filter(w => w.split('').sort().join('') === word.split('').sort().join('')))
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

let a = 'Hanna'
let b = ['Krishna', 'Salihna']
let c = [a, ...b]
console.log(c)
