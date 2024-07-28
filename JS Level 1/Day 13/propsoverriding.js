




// class Animal{

//     name="heera";
//     age;
//     food;
//     behvaiour;
//     gender;
//     fun=function(){
//         console.log("i am fun inside class ");

//     }

//     constructor(name,age,food,behvaiour,gender){
//         this.name=name;
//         this.age=age;
//         this.food=food;
//         this.behvaiour=behvaiour;
//         this.gender=gender;
//     }




// }

// let animal1=new Animal("dog",9,"dog food",function(){
//     console.log("i am loyal");
// })


// console.log(animal1);


class Parent{
    name="vikas";
    age=27;
     fun=function walk() {
        console.log("i am walking");
        
    }

    constructor(){
        
    }


}

class Child extends Parent{
    name="puneet";
    fun=function walk() {
        console.log("i am running");
        
    }




}

let obj1=new Parent();
console.log(obj1);

let obj2= new Child();
console.log(obj2);
obj2.fun()


