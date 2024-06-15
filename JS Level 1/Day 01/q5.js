/*
armstrong number 
1- nod


153 = 1 ki power 3 + 5 ki power 3 + 3 ki power 3 =153
1+125+27=153

121= 1 ki power 3 + 2 ki ppower 3 + 1 ki pwpoer 3
1+8+1=10 ! arm



*/
// console.log("hello world");
function armstrong(num){
    let temp=num;
    let nod=0;
    let sum=0;

    while(temp>0){ 
        temp=Math.floor(temp/10);
        nod=nod+1;
    }
    // console.log(nod);

   while(num>0){
    let ld=num%10;
    sum=sum+Math.pow(ld,nod)
    num=Math.floor(num/10)
   }
   console.log("sum---",sum);
   if(sum===num){
    return true;
   }else{
    return false;
   }


 

 

}

let ans =armstrong(121);
if(ans===true){
    console.log("no");
}else{
    console.log("yes");
}




