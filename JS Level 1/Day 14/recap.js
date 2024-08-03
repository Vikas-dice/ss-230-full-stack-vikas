


// class Human{

//     name;
//     age;
//     sex;
//     salary;
//     profession;
//     task;

//     constructor(name,age,sex,salary,profession,task){

//         this.name=name;
//         this.age=age;
//         this.sex=sex;
//         this.salary=salary;
//         this.profession=profession;
//         this.task=task;


//     }
// }



// let object1=new Human("vikas",27,"male",10000,"sde",function(){
//     console.log("i am an engineer");
//     return 100;
    
// })

// console.log(object1);





function Human(name,age,sex,salary,profession,task){
  

this.name=name;
this.age=age;
this.sex=sex;
this.salary=salary;
this.profession=profession ;
this.task= task ;

const fn= ()=>{
    console.log("----::",this);

}
fn();
    
}

// console.log(this);





let obj1=new Human("vikas",27,"male",10000,"sde",function(){
    console.log(" i am an engineer");
    return 100;
    
})
let obj2=new Human("vikas",27,"male",10000,"sde",function(){
    console.log(" i am an engineer");
    return 100;
    
})

console.log("------------------------------------------------------");
console.log(obj1==obj2);




console.log(obj1);
console.log(obj1.name);
console.log(obj1.task());
console.log(this.age);






console.log(this);






