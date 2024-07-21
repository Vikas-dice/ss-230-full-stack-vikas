
function reversename(str){
    let splittedarray= str.split("");
    console.log(splittedarray);

    let start=0;
    let end=splittedarray.length-1;
    let temp;

    while(start<=end){
      temp=splittedarray[start]
      splittedarray[start]=splittedarray[end];
      splittedarray[end]=temp;

      start++;
      end--;






    }
    let reversenamefinal=splittedarray.join("");
    console.log(reversenamefinal);





}

reversename("jahaj");




// let name="ch  a u dh a ry";
// console.log(name.split(" ").length);

