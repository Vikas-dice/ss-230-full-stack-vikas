/*

arr [2,5,3,7,12,14,55,45,77,98]

pn= 3 1, 3
7 1,7
4 1 2 4 not prime
13 1, 13





*/

let arr=[2,5,3,7,12,14,55,45,77,19,98];
let primecount=0;
for(let i=0;i<arr.length;i++){
    let num=arr[i];
    let nof=0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof=nof+1;
            break;
        } 
    }
    if(nof==0){
        console.log(" prime",num);
    }else{
        console.log("not prime",num);
    }
    console.log("nof of --","of",num,"are ---",nof);

}