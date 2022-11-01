const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on(
    'response',
    (
        name,
        secondName,
        id
    )=> {
    console.log(`User ${name} ${secondName}, with id: ${id}`)
})
customEmitter.on('response',()=> console.log('second data'))

customEmitter.emit('response', 'Walter', 'White', 23 )