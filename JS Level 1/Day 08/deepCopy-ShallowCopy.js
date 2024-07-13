


let arr=[10,20,30,40,"vikas",true,null,undefined,{a:10,b:20},"delhi",10000];


arr[5]="dice";
console.log(arr);

let obj={
    name:"vikas",
    surname:"chaudhary",
    age:27,
    salary:10000,
    addres:"delhi",
    marks:[100,200,300]
}

obj.marks=[1000,2000,3000]
console.log(obj);

//deep copy ans shallow copy


let array1=[10,20,30,40];
let array2=array1; //4k



console.log("before---- array 1 ka maal",array1);
console.log("before ----array 2 ka maal",array2);

array1[2]="chaudhary";

console.log("after---- array 1 ka maal",array1);
console.log("after ----array 2 ka maal",array2);


//object


let obj1={
    name:"vikas",
    surname:"chaudhary",
    age:27,
    salary:100000,
    ismarried:false
}

let obj2=obj1;

console.log("before ---obj1 ka maal",obj1);
console.log("before ------obj2 ka maal",obj2);

obj2.education="btech";

console.log("after ---obj1 ka maal",obj1);
console.log("after ------obj2 ka maal",obj2);



//primitve


let num1=100;
let num2=num1; //x 4k 100 value

console.log("before --num1 ka maal",num1);
console.log("before ---num2  ka maal",num2);



num1=num1*5;
console.log("after ---num1 ka maal",num1);
console.log("after ---num2 ka maal",num2);
