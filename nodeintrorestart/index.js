const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    } else if (req.url === "/about") {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    } else if (req.url === "/contact") {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    else if (req.url === '/styles/style.css') {

        fs.readFile(path.join(__dirname, 'public/styles', 'style.css'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.end(data)
        })
    }
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    // console.log("lllll", req.url)
})

server.listen(3000, () => console.log(`Server is running at ${3000}`))