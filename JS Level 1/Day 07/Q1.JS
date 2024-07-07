
/*

ARRAY [2,4,5,3,7,12,13,45,44,66,76,3]
ODD COUNT \
EVEN COUNT 




*/


let myarr=[2,4,5,3,7,12,13,45,44,66,76,12,20]
let oddcount=0;
let evencount=0;

// for(let idx=0;idx<myarr.length;idx++){
//     if(myarr[idx]%2==0){
//         evencount=evencount+1;
//     }else{
//         oddcount=oddcount+1;
//     }
// }

// for(const maal of myarr){
//     if(maal%2==0){
//         evencount=evencount+1;

//     }else{
//         oddcount=oddcount+1;
//     }
// }

// myarr.forEach(function kuchfun(maal){
//     if(maal%2==0){
//         evencount=evencount+1;
//     }else{
//         oddcount=oddcount+1;
//     }
// })

myarr.forEach((maal)=>{
    if(maal%2==0){
        evencount=evencount+1;
    }else{
        oddcount=oddcount+1;
    }
})

console.log(oddcount);
console.log(evencount);

