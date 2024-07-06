

let marksstudent1=44;
let marksstudent2=55;
let marksstudent3=66;
let marksstudent4=77;
let marksstudent5=88;


let studentsmarks=[44,55,66,77,88,99,100,123,34,5,33];

let arr=["vikas",20000,"Btech",7017440704,true,false,["a","b","c","d"],55.55,{name:"rohan",age:33}]

//length
console.log(arr.length);


//access -elements

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length])
console.log(arr[arr.length-1]);
console.log(arr[6]);
console.log(arr[6][2]);

//arr- value- mutable ?immutable 

arr[3]="naveen";
console.log(arr);
arr[10]="puneet";
console.log(arr);



//traverse 

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//while

let idx=0;
while(idx<arr.length){
    console.log(arr[idx]);
    idx++;

}



//do while

let index=0;
do{
    console.log(arr[index]);
    index++;
}while(index<arr.length)

//for of loop
console.log("-0----------------------------------");
// for(const maal of arr){
//     console.log(maal);
// }

// for(const elements of arr){
//     console.log(elements);
// }




for(let arraykanadrrkamaal of arr){
    console.log(arraykanadrrkamaal);
}

//forEach

console.log("-0------------for each----------------------");

// arr.forEach(function kuchhbhi(maal){
//     console.log(maal);
// })

// arr.forEach(function kuchbhi(arraykaandrrkamaal){
//     console.log(arraykaandrrkamaal);
// })

// arr.forEach((maal)=>{
//     console.log(maal);
// })

arr.forEach((maal)=>{
    console.log(maal);
})



//access 
let object1={
    name:"vikas",
    age:27,
    salary:20000,
    education:"Btech",
    address:"delhi",
    marks:[60,70,80],
    ismarried:false,
    otherdetails:{
        bg:"a+",
        height:"187",
        weight:82
    }
}


console.log(object1);
console.log(object1["age"]);
console.log(object1["salary"]);
console.log(object1["marks"][3]);
console.log(object1["otherdetails"]["bg"]);

//traverse 
for(const key in object1){
    console.log(key);
}


for(const key in object1){
    console.log(object1[key])
}

for(const key in object1){
    console.log(key,object1[key]);
}




let arr2=[{
    name:"vikas",
    age:27,
    salary:20000,
    education:"Btech",
    address:"delhi",
    marks:[60,70,80],
    ismarried:false,
    otherdetails:{
        bg:"a+",
        height:"187",
        weight:82
    }
},{
    name:"vikas",
    age:27,
    salary:20000,
    education:"Btech",
    address:"delhi",
    marks:[60,70,80],
    ismarried:false,
    otherdetails:{
        bg:"a+",
        height:"187",
        weight:82
    }
}]

//access 

console.log(object1.address);
console.log(object1.marks);


object1.address="mumbai";
console.log(object1);

