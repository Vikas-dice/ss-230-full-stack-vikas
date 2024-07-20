/*

vikas
sakiv



*/


let name="vikas &chau&dhar&y d&ice academy";
let arr=name.split('&')

console.log(arr);































function stringreverse(str){
    let arr=str.split("");
    
    let start=0;
    let end =arr.length-1;
    let temp;

    while(start<=end){
     temp=arr[start]
     arr[start]=arr[end];
     arr[end]=temp;

     start++;
     end--;
        
    }
    console.log(arr);


    let joinedstr=arr.join("");
    console.log(joinedstr);







}

stringreverse("vikas");
