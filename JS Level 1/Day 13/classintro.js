


class Animal{

    name;
    age;
    food;
    behvaiour;
    gender;
    fun=function(){
        console.log("i am fun inside class ");

    }

    constructor(name,age,food,behvaiour,gender){
        this.name=name;
        this.age=age;
        this.food=food;
        this.behvaiour=behvaiour;
        this.gender=gender;
    }




}



let animal1=new Animal("moti",8,"dog food",function(){console.log("i am faithful")})
console.log(animal1);


class Human extends Animal{



    constructor(){
        super()
        
        
    }

}


let human2=new Human("rohan",33,"non veg",function(){
    console.log("i am not honest");
})

console.log(human2);

























// console.log(human2);


// class Human{
//     name;
//     age;
//     food;
//     behvaiour;

//     constructor(name,age,food,behvaiour){
//         this.name=name;
//         this.age=age;
//         this.food=food;
//         this.behvaiour=behvaiour;
//     }
// }

// let human1=new Human("ram",23,"veg",function(){
//     console.log(" i am honest");
// })

// console.log(human1);
