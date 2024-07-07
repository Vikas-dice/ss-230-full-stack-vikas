let arr=[2,3,5,4,6,8,9,12,13];


let oddsum=0;
let evensum=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evensum=evensum+arr[i]
    }else{
        oddsum=oddsum+arr[i];
    }
}

console.log(oddsum);
console.log(evensum);

