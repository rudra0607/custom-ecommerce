import './App.css';
import Nav from './component/Nav';
import Hero from './component/Hero';
import Products from './component/Products';
import React, { useState } from "react";

function App() {
  function updateData(params) {
    console.log("cart value " + params);
    setCartVal(params)
  }
  var localProduct = localStorage.getItem('products');
  var cartInitialValue =  localProduct === null ? 0 : JSON.parse(localProduct).length;
  var [cartVal, setCartVal] = useState(cartInitialValue);

  return (
    <>
	 <Nav cartVal={cartVal}/>
	 <Hero/>
   <Products updateFn={updateData}></Products>
	</>
  );
}

export default App;