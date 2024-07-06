const fs = require('fs')

// Blocking, synchronous way
// let hello = 'hello world';
// console.log(hello)
// let textIn = fs.readFileSync('./lorem.txt', 'utf-8')
// console.log(textIn)
// const textOut = `This is what ` + textIn
// fs.writeFileSync('./lorem.txt', textOut)
// console.log('done')

// Non-blocking, asynchronous way
fs.readFile('./lorem.txt', 'utf-8', (err, data1) => {
    console.log(data1)
    fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
    })
})
console.log('Non-blocking')
