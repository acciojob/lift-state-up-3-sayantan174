import React, { useState } from 'react'

const Child = (props)=>{
    const [value,setValue]=useState("");
    return (
        <div className='child'>
        <h2>Child Component 1</h2>
        <button onClick={(e)=>{
            props.func(" Option 1");
        }}>Option 1</button>
        <h2>Child Component 2</h2>
        <button onClick={(e)=>{
            props.func(" Option 2");
        }}>Option 2</button>
        </div>
    )
}

export default Child;