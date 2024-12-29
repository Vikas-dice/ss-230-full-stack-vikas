const http = require('http')



const server = http.createServer((req, res) => {
    res.write("Hello World")
    res.end()
})

server.listen(5000, () => console.log("Server is running"))
// const arr = [{ name: "Rishabh" }, { name: "Chaman" }]
// arr.map((item, idx) => console.log(item.name, idx))