

import React, { useContext } from 'react'
import store from '../store';



export default function App() {
    //consumer
    //usecontext hook

    let data=useContext(store)
    console.log(data.counter);


  return (
    <div>

        <p>Counter :{data.counter}</p>


      

{/* <store.Consumer>
    {
        (maal)=><p>counter :{maal.counter}</p>
            
        
    }


</store.Consumer> */}


        
    </div>
  )
}
