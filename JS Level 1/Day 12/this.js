

let obj={
    name:"vikas",
    surname:"chaudhary",
    age:27,
    address:"Delhi",
    salary:10000,
    otherdetails:{
        gender:"male",
        ismarried:false,
        designation:"sde",
        company:"dice"
    },
    fun:function somefun(){
        console.log("i am inside an object thats why i am a method");
        console.log(this.address);
        console.log(this.age);
        console.log(this.salary);
        console.log(this.otherdetails);
        console.log(this.otherdetails.designation);
        console.log("------------------------------------------------------");
        console.log(obj.address);
        console.log(obj.age);
        console.log(obj.salary);
        console.log(obj.otherdetails);
        console.log(obj.otherdetails.designation);
    }
}
console.log(obj.fun());

console.log(this.salary);
