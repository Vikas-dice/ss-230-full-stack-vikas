const fs = require('fs')
const path = require('path')

//Create Folder
// fs.mkdir(path.join(__dirname, 'test'), function (err) {
//     if (err) console.log("Error ", err)
//     console.log("Folder Created!!!")
// })

//Create and Write File
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Happy Birthday Pankaj Rathore', function (err) {
//     if (err) console.log("Error", err)
//     console.log("File CreateDDD")
// })

//Read the File
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', function (err, data) {
//     if (err) console.log("Err", err)
//     console.log(data)
// })

//Rename the File
// fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'bye.txt'), function (err) {
//     if (err) console.log(
//         "Error", err
//     )
//     console.log("File Renamed")
// })