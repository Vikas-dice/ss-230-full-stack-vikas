

/*
... rest and spread 




*/

let arr1=[10,20,30,40];
let arr2=[...arr1,40,50]
console.log("befroe----arra1 ka maal",arr1);

console.log("before --array 2 ka maal",arr2);

arr1[3]="rohan"
console.log("after --array 1 ka maal",arr1);
console.log("after ---arrav 2 ka maal",arr2);

//object 

let obj1={
    name:"vikas",
    surname:"chaudhary",
    age:27,
    philosophy:"aao madam aapko lahore chhdo du"

}

let obj2={...obj1,salary:10000}

console.log("befroe----obj1  ka maal",obj1);

console.log("before --obj 2 ka maal",obj2);
obj1.philosophy="chhodo madam ";

console.log("after --obj 1 ka maal",obj1);
console.log("after ---obj  2 ka maal",obj2);

//rest operator


function sum(...args){
    let nof=0;
    let primecount=0;
    for(let i=0;i<=args.length;i++){
        let num=args[i]
        // console.log(args[i]);
        for(let div=2;div*div<=num;div++){
            if(num%div==0){
                nof=nof+1;
                break;
            }
        }
        if(nof==0){
            primecount=primecount+1;

        }
      
    }
    // let sum=0;
    // console.log(args);
    // for(const maal of args){
    //     sum=sum+maal;
    // }

    // return count;
    return primecount;

}

let rv=sum(13,5,7,9,11);
console.log(rv);
