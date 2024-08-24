




// fetch("https://restcountries.com/v3.1/all")



 function getdata(){

    console.log("hello dunia");
    
   let response= fetch("https://restcountries.com/v3.1/all")
   console.log("meri dunia");
   
   response.then((data)=>{
    let ad=data.json();

    console.log(ad);
    
   })
   console.log("hello");
   
//    let ad= response.json();
   console.log("world");
   

//    console.log(ad);
   console.log("heyyyy");
   
   


}

getdata();

'https://randomuser.me/api/',