
/*

q1- nod ?


num=4567;
output = 4



*/

// function nod(num){
//     // console.log(num);
//     let count=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         count=count+1;
//     }
//     // console.log(num);
//     return count;
// }

// let ans=nod(2345)
// console.log(ans);


/*

l24 right side nod(2345)
l14 num=ram =2345
l16 count=0
l17 num>0 2345>0 true
l18 num=num/10 2345/10 234.5 234
l19 count=count+1 0+1 =1
l17 num>0 234>0 true
l18 num=num/10 234/10 23.4 23
l19 count=count+1 1+1 =2
l17 num>0 23>0 true
l18 num=num/10 23/10 2.3 2
l17 num>0 2>0 true
l18 num=num/10 2/10 0.2 0
l19 count=count+1 2+1=3
l17 num>0 0>0 false
l21 return count = 4
l24 left side ans=4
l25 " 4"

-------------------

153 = 1 ki power 3+ 5 ki power 3 + 3 ki power 3 = 
1+125+27=153 armstrong 

124= 1 ki power 3 + 2 ki power 3 + 4 ki power 3
1+8+64= !124 not armstrong 





*/


function armstrong(num){
    //task1 - nod 
    let temp=num;
    let temp2=num;
    let nod=0;
    let sum=0;
    while(temp>0){
        temp=Math.floor(temp/10);
        nod=nod+1; 
    }
    while(temp2>0){
        let ld=temp2%10;
        sum=sum+Math.pow(ld,nod);
        temp2=Math.floor(temp2/10);

    }
    // console.log("sum----",sum);
    if(num==sum){
        return true;
        // console.log("yes it is a armstrong number ")
    }else{
        return false;
        // console.log("no its not a armstrong number ");
    }
}
let ans2 =armstrong(153);
if(ans2==true){
    console.log("yes it is a armstrong number ")
}else{
    console.log("no its not a armstrong number ");

}

