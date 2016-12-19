var input = 'hoo hoo'
var splitWords = input.split('')

result = []

for (var i = splitWords.length - 1; i >= 0; i -= 1) {
  result.push(splitWords[i])
  // console.log(result)
}

console.log(input + ' is ' + result.join(''))
