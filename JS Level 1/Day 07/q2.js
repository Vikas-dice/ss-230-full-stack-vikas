/*
arr [2,3,4,1,55,13,45,77,19,101]
max element  101
min element 1

span=max-min


*/


let arr=[2,3,4,123,55,13,45,77,19,101];
let max=arr[0];
let min=arr[0];
for(let idx=0;idx<arr.length;idx++){
    if(arr[idx]>max){
        max=arr[idx];
    }
    if(arr[idx]<min){
        min=arr[idx]
    }

}
console.log(max);
console.log(min);
console.log(max-min);




