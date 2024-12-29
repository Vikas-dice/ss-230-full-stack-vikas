const fs = require('fs')
const path = require('path')

//Create Folder
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if (err) console.log("Error", err)
//     else
//         console.log("Folder Created")
// })

//Create and write to File
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I am luv my india', function (err) {
//     if (err) console.log("Err", err)
//     else
//         console.log("File Created")
// })

//Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', function (err, data) {
//     if (err) console.log("eRrr", err)
//     else
//         console.log(data)
// })

//Rename
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'bye.txt'), (err) => {
    if (err) console.log("Error", err)
    else
        console.log("File Renamed")
})