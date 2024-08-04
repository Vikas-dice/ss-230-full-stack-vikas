





// // const arr=["vikas","rohan","puneet","parekh"];


// // let rv=arr.forEach((maal)=>{
// //     console.log(maal);

// //     return "dice academy";
    
// // })

// // console.log(rv);
// //map 


// // let rv=arr.map((maal,index,arr)=>{
// //     console.log(arr);
    
// //     console.log(index);
    
// //     console.log(maal);
// //     return [true];
    
// // })


// // console.log(rv);


// // const array=[1,2,3,2,4,5,6,19,18,20,17];


// // array.map((elt,index,arr)=>{
   
// //     console.log(elt,index,arr);
  
// //     return index+1;

 
// // })  



// // const arr=["vikas","ramesh","suresh","sahil","mohit","dice","academy"]

// // let rv=arr.filter((maal,index,arr)=>{
// //     console.log(maal);
// //     console.log(index);
// //     console.log(arr);
    
    

// //     return "";
    
// // })

// // console.log(rv);


// const months=["january","february","macrh","april","may","june","july","august","september","october","novermber","decemeber"];




// const student=[
//     {
//         name:"vikas",
//         age:27
//     },
//     {
//         name:"vinay",
//         age:20
//     },
//     {
//         name:"vineet",
//         age:18
//     },
//     {
//         name:"rohan",
//         age:17
//     },
//     {
//         name:"puneet",
//         age:22
//     },
//     {
//         name:"sahil",
//         age:24
//     }
// ]


// // let adultstudents=student.filter((students)=>{
// //     return students.age>18;
// // })

// // let ekorarr=adultstudents.map((maal)=>{
// //     console.log(maal);
    
// // })

// // let ans=ekorarr.filter((x)=>{
// //     console.log("hello");
    
// //     console.log(x);
    
// //     return x.startsWith('s')
// // })

// // console.log(ans);




// let adultstudents=student.filter((student)=>{
//     return student.age>18
// }).map((student)=>{
//     return student.name
// }).filter((student)=>{
//     return student
// })

// console.log(adultstudents);


// //reduce









const array=[1,2,3,2,4,5,6,8];
let rv=array.reduce((acc,cv)=>{
    console.log("acc is -",acc,"current value is -",cv);

    return acc+cv;
   
    
    
},10)


console.log(rv);








