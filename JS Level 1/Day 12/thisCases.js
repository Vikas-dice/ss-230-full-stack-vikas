

//case 1 - global 

console.log(this);

// obj - es 5 func - this

let obj={
    name:"Vikas",
    age:27,
    parent:function fun(){
        console.log(this);
    }
}


console.log(obj.parent());


//3rd case - obj- es6 fun-fat arrow - this 

let obj2={
    name:"tuyen",
    age:20,
    parent:()=>{
        console.log(this);
    }
}

obj2.parent();


//case 4 - obj = es5 parent - es5 child - this 


// let obj3={
//     name:"piyush",
//     age:20,
//     parent:function(){
//         console.log("parent fun chal gya !");


//         let child=function(){
//             console.log("child fun chal gya !");
//             console.log(this);
//         }

//         child();

//     }
// }


//case 5

// let obj3={
//     name:"piyush",
//     age:20,
//     parent:function(){
//         console.log("parent fun chal gya !");


//         let child=()=>
//             console.log("child fun chal gya !");
//             console.log(this);
        

//         child();

//     }
// }


// let obj3={
//     name:"piyush",
//     age:20,
//     parent:()=>{

//         console.log("parent fun chal gya !");


//         let child=()=>{
//             console.log("child fun chal gya !");
//             console.log(this);
//         }

//         child();


//     }
    
    
// }

//case 7


let obj3={
        name:"piyush",
        age:20,
        parent:function(){
    
            console.log("parent fun chal gya !");
    
    
            let child=()=>{
                console.log("child fun chal gya !");
                console.log(this);
            }
    
            child();
    
    
        }
        
        
    }





obj3.parent();
