
let obj1={
    name:"vikas",
    surname:"chaiudhary",
    age:27,
    salary:10000
}



let obj2={
    name:"mamans",
    surname:"pandey",
    age:17,
    salary:20000
}


let obj3={
    name:"piyush",
    surname:"nagpal",
    age:22,
    salary:50000

    //es5 - function cons 

}

function Employee(name,surname,age,salary){
    this.name=name;
this.surname=surname;
this.age=age;
this.salary=salary;
}

let emp1= new Employee("himani","chadha",20,25000)

let emp2= new Employee("aanchal","kaushik",21,35000)
console.log(emp1);
console.log(emp2);

emp1.ismarried=false;

console.log(emp1);
console.log("-------------------------------------");
let emp3={...emp1,...emp2}

console.log("---------------999999999999999999999999999999----------------------");
let emp4={emp1,emp2}
console.log(emp4);


// console.log(emp3);

// console.log(emp1==emp2);

// console.log(emp1 instanceof Employee);

//hw - object.freeze and object.seal








