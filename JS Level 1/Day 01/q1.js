
//print from reverse
// 5676%10= 6
//56676%100= 76


//  let num=5676;
 


//  while(num>0){
//     let ld=num%10;
//     console.log(ld);
//     num=Math.floor(num/10);
   





//  }


// console.log(55/10)


/**
 * L7 NUM =RAM =5676
 * L11 NUM>0 5676>0 TRUE
 * L12 LD=RAM =NUM%10 5676%10= 6
 * L13 6
 * L14 NUM=NU8M/10 567.6 567
 * L11 NUM>0 567>0 TRUE
 * L12 LD=NUM%10 567%10=7
 * L13 7
 * L14 NUM=NUM/10 567/10 56.7 56
 * L11 NUM>0 56>0 TRUE
 * L12 LD=NUM%10 56%10=6
 * L13 6
 * L14 NUM=NUM/10 56/10 5.6 5
 * L11 NUM>0 5>0 TRUE
 * L12 LD=NUM%10 5%10= 5
 * L13 5
 * L14 NUM=NUM/10 5/10= 0.5 0
 * L11 NUM>0 0>0 FALSE
 * L22 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 






 */

function printnumberreverse(num){
    
 while(num>0){
    let ld=num%10;
    console.log(ld);
    num=Math.floor(num/10);
   





 }

}

printnumberreverse(45678);
console.log("----------------------------");
printnumberreverse(12345);
