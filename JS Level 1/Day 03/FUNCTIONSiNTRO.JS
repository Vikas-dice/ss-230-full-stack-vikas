


// let arr = ["Manas", "Sayantika", "Himanshu", "sumit", "rishabh", "pankaj", "aditya", "siddhi", "himanshu", "seenu"]
let arr = [{
    name: "Seenu",
    class: "AppDev"
}, {
    name: "Manas",
    class: "iosDev"
},
{
    name: "Sumit",
    class: "AndroidDev"
}
    ,
{
    name: "Sayantika",
    class: "ML"
},
{
    name: "aditya",
    class: "AI"
}]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name == "Seenu")
//         console.log("Hello " + arr[i].name.toUpperCase() + " and your current class is " + arr[i].class)
//     else
//         console.log("hi " + arr[i].name.toUpperCase() + " and your current class is " + arr[i].class)
// }

//wap to a pass a name and check the student is eligible to seat or not
//Db
let students = [{
    name: "Akansha",
    fee: 27000
}, {
    name: "Nitya",
    fee: 30000
}, {
    name: "Shreeya",
    fee: 3000
}, {
    name: "Manvi",
    fee: 89457
}]




function getAccess(name) {
    if (name == "") {
        console.log("Please Enter the Name")
        return;
    }
    let found = false
    let foundedStudent;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name == name) {
            found = true;
            foundedStudent = students[i]
            break;
        }
    }
    if (found) {
        if (foundedStudent.fee < 25000) {
            sendEmail(foundedStudent.name)
        } else {
            console.log("You're eligible")
        }
    } else {
        console.log("User Not found")
    }
}

getAccess("Shreeya")


function sendEmail(name) {
    console.log("Please " + name + " submit you fee asap")
}

