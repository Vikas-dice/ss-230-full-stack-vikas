


// console.log("vikas")
// console.log("chaudhary");
// for(let i=11;i<=200;i++){
//     console.log("dice",i);

// }


// setTimeout(function(){
//     console.log("m kuch time k baad chalunga ");

// },4000)

// let rv=setTimeout(function(){
//     console.log("vikas after some time ")
// },1000)
// console.log(rv);


// let id=setInterval(function(){
//     console.log("i will run after evry 3 secs");
//     clearInterval(id);


// },3000)



// console.log(id);




// console.log("vikas");
// console.log(":chaudhary");
// for (let i = 0; i <= 20; i++) {
//     console.log("vikaqs ", i);

// }

// setTimeout(function () {
//     console.log("hello world-inside set timeout ");

//     for (let a = 10; a <= 60; a++) {
//         console.log("a ki value", a);

//     }


//     console.log("i am inside settimeout fun");


// }, 4000)

// setInterval(() => {
//     console.log("i am runnning bcz of setinterval");


// }, 2000);


// console.log("dice");
// console.log("academy");
// for (let ii = 10; ii <= 50; ii++) {
//     console.log(ii);
// }
//loop variable function
//Async Javascript
//

// console.log("Aditya")
// setTimeout(() => {
//     console.log("Seenu")
// }, 0)
// console.log("Rishabh")

//OUtput
//Aditya,Rishabh Seenu

// let a = 50
// let b = 98
// let c = 66

// console.log("A")

// setTimeout(() => {
//     console.log("Timer")
// }, 1000
// )
// console.log("C")/

function print(a) {
    console.log(a)
}

// print("jj")

function adityaBolo(cb) {
    cb("Baatao aaj ka plan")
}
adityaBolo(print)


// cb = print("Rishabh")

//Promise

console.log("A")

const p1 = new Promise((resolve, reject) => {
    console.log("START")
    setTimeout(() => {
        reject("hello")
    }, 1000)


})
p1
    .then(res => res + " First then")
    .then(res => res + " Second then")
    .then(res => console.log(res, "jjjj"))
    .catch(err => console.log("Error", err))


console.log("B")























