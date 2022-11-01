const { readFileSync,  writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result.txt', `The are results:\n - first text: ${first}\n - second text: ${second}`)
console.log('done')
console.log('next')