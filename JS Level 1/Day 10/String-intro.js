

/*
string - seq of chars
vikas 
v i k a s

js = "",''




*/
let ismarried=false;
console.log(typeof ismarried);

let arr=[10,20,30];
console.log(typeof arr);

let obj={
    name:"vikas",
    age:27,
    salary:10000
}
console.log(typeof obj);

let fun=function fun(){
    console.log("i am fun");
}
console.log(typeof fun);
let num1=10;
console.log(typeof num1);
let myname="vikas";
console.log(myname);

console.log(typeof myname);

console.log(myname.__proto__);

console.log(myname.length); //5

//memory mgmt
//access
console.log(myname[1]);
console.log(myname[0]);
console.log(myname[myname.length-1]);
console.log(myname[myname.length]);

//? string mutable ? immutable

myname[3]='z';
console.log(myname[3]);

//traversing 

//for loop

for(let i=0;i<myname.length;i++){
    console.log(myname[i]);
}

//while loop


let idx=0;
while(idx<myname.length){
    console.log(myname[idx]);
    idx++;

}

//do while

let index=0;
do{
    console.log(myname[index]);
    index++;

}while(index<myname.length)

//for of?

for(const maal of myname){
    console.log(maal);
}

//for each 

myname.forEach(function fun(maal){
    console.log(maal);

})


// for(const maal in myname){
//     console.log(maal);
// }














