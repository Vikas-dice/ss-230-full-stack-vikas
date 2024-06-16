/*

num=5678
5
6
7
8


5678%1000 = 678
5678/1000= 5.678 floor 5
5 print 


678%100=78
678/100=6.78 floor 6 print

78/10=7.8 floor 7 print

8/1=8 floor print

5678 10 ki power nod-1







*/

function printfromfront(num){

    let nod=0;
     let temp=num;
     while(temp>0){
        temp=Math.floor(temp/10);
        nod=nod+1;
     }

     //step 2 - div 
     let div=Math.pow(10,nod-1);
    //  console.log(div);

     while(num>0){
        let fd=Math.floor(num/div)
        console.log(fd);
        num=num%div;
        div=Math.floor(div/10);


     }



}

printfromfront(48989);
