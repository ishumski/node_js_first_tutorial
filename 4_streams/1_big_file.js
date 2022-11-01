const {writeFileSync} = require('fs')

for (let i = 0; i < 10000; i++) {
    writeFileSync('../content/bigTextFile.txt', `Yzbekistan or die ${i}\n`, {flag: 'a'})
}