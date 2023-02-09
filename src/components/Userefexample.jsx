import React from 'react'
import { useRef } from 'react';

export default function Userefexample() {
  const inputRef=useRef();

  function handleRef(){
console.log("input ref is ",inputRef)
inputRef.current.focus();
//  inputRef.current.value="react";
console.log("entered value is",inputRef.current.value);
// inputRef.current.style.display="none";
inputRef.current.style.color="red";
inputRef.current.style.background.color="red";
  }
    return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleRef}>Click</button>
    </div>
  )
}
