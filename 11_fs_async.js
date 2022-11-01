const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        writeFile(
            './content/result_async.txt',
            `The are results:\n - first text: ${first}\n - second text: ${second}`,
            'utf8',
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done')
            }
        )
    })
})
console.log('next')