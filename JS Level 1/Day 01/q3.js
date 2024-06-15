/*
num = 56456
return 5+6+4+5+6

let sum=0;
sum+ld






*/

let num=4567;

// let sum=0;
// while(num>0){
//     let ld=num%10;
//     sum=sum+ld;
//     num=Math.floor(num/10);

// }
// console.log(sum);

function sum(num){
    let sum=0;
while(num>0){
    let ld=num%10;
    sum=sum+ld;
    num=Math.floor(num/10);

}
return sum;
    
}

let ans =sum(4567)
console.log(ans);

let ans2 =sum(12345)
console.log(ans2);


