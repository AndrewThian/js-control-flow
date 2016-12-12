var animals = 'cow,chicken,pig,goose,zebra,turtle,horse,cat,dog'
var array = animals.split(',') //
// console.log(array)
var maxLength = 3

var lrgWd = []
var smlWd = []

for (var i = 0; i < array.length; i++) {
  // console.log(array[i].length)
  if (array[i].length > maxLength) {
    lrgWd.push(array[i])
    // console.log(lrgWd)
  } else if (array[i].length >= maxLength) {
    smlWd.push(array[i])
    console.log(smlWd)
  }
}

console.log("large words are: " + lrgWd)
console.log("small words are: " + smlWd)
