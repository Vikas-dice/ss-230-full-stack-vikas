
/*

["vikas","chaudhary","dice","academy"]
["sakiv"m"yrahduahc,"ecdi","ymedaca"]



*/

function reverseeachstringinanarray(arr){
    for(let i=0;i<arr.length;i++){
        let str=arr[i];
       let spilittedarr=str.split("");
      let start=0;
      let end =spilittedarr.length-1;
      let temp;

      while(start<=end){

        temp=spilittedarr[start]
        spilittedarr[start]=spilittedarr[end];
        spilittedarr[end]=temp;


        
   
        start++;
        end--;

      }

      let finalarray=spilittedarr.join("");
      console.log(finalarray);


        

    }
}


reverseeachstringinanarray(["vikas","chaudhary","dice","academy"])
