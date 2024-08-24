

// // function test(callback){
// //     callback();



// // }
// // test(()=>{
// //     console.log("i ma testing 1");
// //     test(()=>{
// //         console.log("i am testing 2");

// //         test(()=>{
// //             console.log("i am testing 3");
// //             Test(()=>{
// //                 console.log("i am testing 5");

// //                 test(()=>{
// //                     console.log("i am testing 6");
                    
// //                 })
                
// //             })
            
// //         })
        
// //     })
    
// // })




// function test(a){
//     console.log("a k andrr ye pda h",a);
//     a();
// }
// test(function(){
//     console.log("i am a callback func");
//     test(function(){
//         console.log("i am call back 2");
        
//     })
    
// });



function test(cb){
    cb();
}

test(()=>{
    console.log("test 1");
    test(()=>{
        console.log("test 2");
        test(()=>{
            console.log("test 3");
            test(()=>{
                console.log("test 4");
                test(()=>{
                    console.log("test 5");
                    test(()=>{
                        console.log("test 6");
                        
                    })
                    
                })
                
            })
            
        })
        
    })
    
})