
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {
  const [input,setInput]=useState("");
  const inputChange=(data)=>{
    setInput(data);
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <p>Selected Option:{input}</p>
        <Child func={inputChange}/>
    </div>
  )
}

export default App
