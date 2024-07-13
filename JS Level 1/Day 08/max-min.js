

/*

[10,20,30,4,5,13,45,65,38]

max elemt
min elemt
span= max-min





*/

let arr=[10,20,30,4,5,13,45,65,38];
let max=arr[0];
let min=arr[0];


//for loop

// for(let i=0;i<=arr.length;i++){
//     // console.log(arr[i]);
    
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i];
//     }


// }
// console.log(max);
// console.log(min);
// console.log(max-min);

// let i=0;
// while(i<=arr.length){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }

// console.log(max);
// console.log(min);
// console.log(max-min);

// let i=0;
// do{
  
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
//     i++;
//     console.log(max);
//     console.log(min);
//     console.log(max-min);
    

  

// }while(i<=arr.length)



// arr.forEach(function fun(maal){
//     if(maal>max){
//         max=maal;
//     }
//     if(maal<min){
//         min=maal;
//     }
// })
// console.log(max);
// console.log(min);
// console.log(max-min);


for(const maal of arr){
    if(maal>max){
        max=maal;
    }
    if(maal<min){
        min=maal;
    }
}
console.log(max);
console.log(min);
console.log(max-min);






/*

l17 ram [10,20,...]
l18 max=ram=10
l19 min=ram=10;

l24 i=ram=0;
i<=arr.length 0<=9 tru
l27 arr[i]>max 10>10 false
l30 arr[i]<min 10<10 false
i++ i=1
l27 arr[1]>10 20>10 true
l28 max=20
l30 arr[i]<min 20<10 false
i++ i=2
l27 arr[2]>max 30>20 true
max=arr[2[ 30
l30 arr[2]<min] 30<20 false





 











*/