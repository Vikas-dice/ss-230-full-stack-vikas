

function rotate(num,k){
    let nod=0;

    let temp=num;
    while(temp>0){
        temp=Math.floor(temp/10);
        nod=nod+1;
        
    }
    // console.log(nod);
    let div=1;
    let mult=1;
    for(let i=1;i<=nod;i++){
        if(i<=k){
            div=div*10;
        }else{
            mult=mult*10;
        }
    }
    // console.log(div);
    // console.log(mult);
    k=k%nod;
    //6%5=1
    if(k<0){
        k=k+nod;

    }
    let lnd=num%div;
    let fnd=Math.floor(num/div);
    console.log(lnd);
    console.log(fnd);
    // let ans =lnd*mult+
    let ans =lnd*mult+fnd;
    console.log(ans);
}
rotate(56789,-2)


/*
l3 num=5632 
k=2
l4 nod=ram=0
l6 temp=5632
l7 temp>0 5632>0 true
l8 temp=temp/10 563.2 563
l9nod=nod+1 0+1=1
l7 temp>0 563>0 true
l8 temp=temp/10 56.3 56
l9 nod+1 1+1=2
l7 

..nod =4
l13 div=1
l14 mult=1
l15 i=ram=1
i<=nod 1<=4 true
l16 i<=k 1<=2 true
l17 div=div*10 1*10=10
i++ i=2
i<=nod 2<=nod 2<=4 true
l16 i<=k 2<=2 true
div=div*10 10*10=100
i++
i=3
i<=nod 3<=4 true
l16 i<=k 3<=2 false
else
mult=mult*10=1*10=10
i++
i=4
i<=nod 4<=4 true
l16 i<=k 4<=2 false
else{
mul=myult810 10*10=100
}
i++ i=5
i<=nod 5<=4
false




*/

