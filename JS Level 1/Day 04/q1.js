


function countoddeven(num){
    let oddcount=0;
    let evencount=0;
    while(num>0){
        let ld=num%10;
        if(ld%2==0){
            evencount=evencount+1;
    
        }else{
            oddcount=oddcount+1;
        }
        num=Math.floor(num/10);

    }

    // console.log("odd count ",oddcount);
    // console.log("even count",evencount);
    return [oddcount,evencount]


}

let rv=countoddeven(5632);
console.log(rv);


/*
l25 num=ram =5632
l5 oddcount=0
l6 evencount=0;
l7 while num>0 5632>0 true
l8 ld=num%10 5632%10=2
l9 ld%2==0 2%2==0 true
l10 eveeven+1 0+1=1
l15 num=math.floor num/10 563.2 563
l7 num>0 563>0 true
l8 ld=num%10 563%10=3
l9 ld%2==0 3%2==0 false
l12 odd =odd+1 0+1=1
l15 num=num/10 563/10 56.3 56
l7 num>0 56>0 true
l8 ld=num%1- 56%10 =6
l9 ld%2==0 6%2==0 true
l10 even=even+1 1+1=2
l15 num=num/10 56/10 5.6 5
l7 num>0 5>0 true
l8 ld=ld%10 5%10=5
l9 ld%2==0 5%2==0 false

l12 odd=odd+1 1+1=2
l15 num=num/10 5/10 =0.5 0
l7 num>0 0>0 false


l19 odd count 2
l20 even 2






*/



