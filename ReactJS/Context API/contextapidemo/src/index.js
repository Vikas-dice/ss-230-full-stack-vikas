import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import App from './functionalComponent/App';
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <store.Provider value={{
    counter:10
  }} >

    <App/>
  </store.Provider>



  

 
  // <React.StrictMode>
  //   
  // </React.StrictMode>
);


