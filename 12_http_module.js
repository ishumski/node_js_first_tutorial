const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Home page')
        return
    }
    if (req.url === '/about') {
        res.end('About page')
        return
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>Not found</p>
    <a href="/">Back to home page</a>`)
})

server.listen(8000)