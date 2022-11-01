const {createReadStream} = require('fs')

const stream = createReadStream('../content/bigTextFile.txt')

stream.on('data',(result) => {
    console.log(result)
})
