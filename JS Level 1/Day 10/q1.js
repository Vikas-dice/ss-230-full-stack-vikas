
/*
vikiikaasiik

i=?


*/

function countchar(str,target){
    let count=0;
  for(let index=0;index<str.length;index++){
    if(str[index]===target){
        count++;
    }

  }

  return count;


}
let rv=countchar("vikiikaasiik",'k')
console.log(rv);


