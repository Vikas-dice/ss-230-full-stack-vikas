/*

armstrong number 

125
1 ki power 3 + 2 ki power 3 + 5 ki power 5 = 125


*/

/*

num=5678



*/

let num=5678;
let count=0;
while(num>0){

    num=Math.floor(num/10);
    count=count+1;
}

console.log(count);




/*
l19 num=ram=5678
l20 count=ram=0
l21 num>0 5678>0 true
l23 num=num/10 5678/10 567.8 567
l24 count=count+1 0+1 =1
l21 num>0 567>0 true
l23 num=num/10 567/10 56.7 56
l24 count=count+1 1+1 =2
l21 num>0 56>0 true
l23 num=num/10 56/10 5.6 5
l24 count=count+1 2+1 =3
l21 num>0 5>0 true
l23 num=num/10 5/10 0.5 0
l24 count=count+1 3+1=4
l21 num>0 0>0 false

l27 4




*/

function nod(num){
    let count=0;
while(num>0){

    num=Math.floor(num/10);
    count=count+1;
}

return count;


}

let ans =nod(23456)
console.log(ans);
