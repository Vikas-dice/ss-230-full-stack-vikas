


// class Human{
//     legs;
//     hands;
//     behaviour;


//     constructor(legs,hands,behaviour){
//         this.legs=legs;
//         this.hands=hands;
//         this.behaviour=behaviour;
//     }
// }

// let insaan1= new Human(2,2,function (){
//     console.log("i am honest");
//     return 10;
    
// })

// let insaan2= new Human(2,2,function (){
//     console.log("i am dishonest");
//     return 100;
    
// })

// let insaan3= new Human(2,2,function (){
//     console.log("i am educated");
//     return 101;
    
// })

// console.log(insaan1,insaan2,insaan3);



// class Animal extends Human{


// }

// let animal1 = new Animal(4,4,function(){
//     console.log(" i am dog ");
    
// })

// let animal2 = new Animal(2,2,function(){
//     console.log(" i am some animal ");
    
// })

// console.log(animal1,animal2);

// java - 


// class A{

// }
// class B{

// }

// class C extends A{

// }

// class D extends C{

// }

// class E extends B,A,C{

// // }



class Btech{
    courseName;
    NoofSubjects;
    companies;
    #avgPackage;




    constructor(cname,sub,companies,ctc){
        this.courseName=cname;
        this.NoofSubjects=sub;
        this.companies=companies;
        this.#avgPackage=ctc;

    }

    fun=function(){
        console.log(this.#avgPackage);
        
    }


    
}

let student1=new Btech("cse",40,["google","amazon","microsoft","lala company"],1000000);

console.log(student1);
console.log("===================");
console.log((student1.fun()));





