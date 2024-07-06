//
// * if else --[Decision Making]

// loops
// for (let i = 1; i < 5; i++) {
//     if(i==2)
//     console.log("hello ", i)
//     else
//     console.log("bye ",i)
// }

//Array is a like a variable but stores more than one values
// let arr = ['1', '2', '3']

// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])/

// // console.log("value of i ", i)

// arr.push('4')
// arr.push('5')
// let i;
// for (i = 0; i < arr.length; i++) {
//     console.log("hello", arr[i])
// }
// console.log("len ", arr.length)


// let ar = [1, 24, 9, 3, 4, 9]

// let evenCount = 0, oddCount = 0;

// for (let i = 0; i < ar.length; i++) {
//     if (ar[i] % 2 == 0) evenCount++
//     else oddCount++
// }
// console.log("Even Count -- odd Count", evenCount, oddCount)

//Phone
// Screen Size
// Battery
// Processor
// Memory
// Camera
// Color

const iphone = {
    screenSize: 6.5,
    battery: 5000,
    processor: 'A16',
    memory: 64,
    camera: 48,
    color: "black",
    price: 3000
}

const xiamoi = {
    screen: 6,
    battery: 5000,
    processor: "snapdragon",
    memory: 128,
    camera: 64,
    color: "pink",
    price: 400
}


const poco = {
    screen: 6,
    battery: 7000,
    processor: "snapdragon",
    memory: 256,
    camera: 64,
    color: "yellow",
    price: 400
}

const samsung = {
    screen: 6,
    battery: 7000,
    processor: "snapdragon",
    memory: 256,
    camera: 64,
    color: "yellow",
    price: 4000
}



//[{},{}]
const phones = []
phones.push(iphone)
phones.push(xiamoi)
phones.push(poco)
phones.push(samsung)

for (let i = 0; i < phones.length; i++) {
    if (phones[i].price == 3000) {
        console.log(phones[i])
        break;
    } else {
        console.log("Less", phones[i])
    }

}