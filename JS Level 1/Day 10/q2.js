/*
["vikas","delhi","dice","delhi","mumbai","pune","delhi"]
target = "delhi"




*/

function countword(arr,target){
    let count =0;
    for(const elt of arr){
        if(elt===target){
            count++;
        }

    }
return count;
}

let rv=countword(["vikas","delhi","dice","delhi","mumbai","pune","delhi"],"delhi");
console.log(rv);
