const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf8')
        const second = await readFile('../content/second.txt', 'utf8')
        await writeFile('../content/result_async_utiils.txt', `New text from utils\n - ${first}\n - ${second}`)
    } catch (e) {
        console.log(e)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (error, data) => {
//             if (error) {
//                 reject(error)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('../content/first.txt')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
