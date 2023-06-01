import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import Productdetails from './Pages/Productdetails'
import Cart from './Pages/Cart'
import { createContext } from 'react';
import { useState } from 'react';

const data = createContext();


function App() {

  const [cartitems,Setcartitems] = useState([]);
  

  return (
   <BrowserRouter>
    <data.Provider value = {[cartitems,Setcartitems]}>
        <Routes>
          <Route exact path ='/' element = {<Homepage/>}/>
          <Route exact path ='/:id' element = {<Productdetails/>}/>
          <Route exact path = '/cart' element = {<Cart/>}/>
        </Routes>
      </data.Provider>
   </BrowserRouter>
  );
}

export default App;
export {data};