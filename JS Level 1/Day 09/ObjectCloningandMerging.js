


let obj1={
    name:"vikas",
    surname:"chaudhary",
    age:27,
    salary:10000,
}

let obj2={};

//method 1- for in loop

for(const key in obj1){
    obj2[key]=obj1[key]
}

console.log("object 1 ----",obj1);
console.log("object 2 ------",obj2);


obj1.ismarried=false;


console.log(" after object 1 ----",obj1);
console.log("after object 2 ------",obj2);


//method - object.assign 

let obj3={};

Object.assign(obj3,obj1)
console.log(obj3);



//method 3 object spread op

let obj4={...obj1}
console.log("before -----",obj4);
obj1.ismarried=true;
console.log("after ---obj1 ",obj1);
console.log("after ---obj4 ",obj4);


