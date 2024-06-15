// let num=56756;
// let target =5;
// let freq=0;

// while(num>0){
    
//     let ld=num%10;
//     if(ld==target){
//         freq=freq+1;
//     }
//     num=Math.floor(num/10);



   

// }
// console.log(freq);
/*

l1 num=56756
l2 target=ram=5
l3 freq=ram =0;

l5 num>0 56756>0 true
l7 ld=ram=num%10 56756%10=6
l8 ld==target 6==5 false
l11 num=num/10 56756/10 5675.6 5675
l5 num>0 5675>0 true
l7 ld=num%10 5675%10 =5
l8 ld==target 5==5 true
l9 freq= freq+1 0+1 =1
l11 num=num/10 5675/10 567.5 567
l5 num>0 567>0 true
l7 ld=num%10 567%10 7
l8 ld==target 7==5 false
l11 num=num/10 567/10 56.7 56
l5 num>0 56>0 true
l7 ld=num%10 56%10 6
l8 ld==target 6==5 false
l11 num=num/10 56/10 5.6 5
l5 num>0 5>0 true
l7 ld=num%10 5%10 =5
l8 ld==target 5==5 true
l9 freq=freq+1 1+1=2
l11 num=num/10 5/10 0.5 0
l5 num>0 0>0  false
l18 2


*/

function countfreq(num,target){
    let freq=0;
    while(num>0){
    
        let ld=num%10;
        if(ld==target){
            freq=freq+1;
        }
        num=Math.floor(num/10);
    
    }
    return freq;

}

let ans=countfreq(567757,7)

console.log("freq for this target is",ans);
let ans2=countfreq(12322242,2)
console.log("freq for this target is",ans2);

