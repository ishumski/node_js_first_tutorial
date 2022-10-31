const os = require('os')

//current user info
const user = os.userInfo()
console.log(user)

//method returns the system uptime
console.log(`System uptime ${os.uptime()} sec`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freMem: os.freemem()
}
console.log(currentOS)