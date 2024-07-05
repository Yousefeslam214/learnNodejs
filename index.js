const fs = require('fs')

let hello = 'hello world';
console.log(hello)
let textIn = fs.readFileSync('./lorem.txt', 'utf-8')
console.log(textIn)
const textOut =`This is what ` + textIn
fs.writeFileSync('./lorem.txt', textOut)
console.log('done')
