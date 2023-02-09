import React, { useState,useMemo } from 'react'

export default function UseMemoExample() {

    const [first,setFirst] = useState(0);
    const [second,setsecond] = useState(0);

    const increment=()=>{
        setFirst(first+1);
    }


    const decrement=()=>{
        setsecond(second-1);
    }

  useMemo(() => 
  first, [second])
  
    const isEven=useMemo(()=>{
      console.log("even function rendring")
      for(let i=1;i<=1000000000;i++){}
        return first%2===0;
    },[first])

  return (
    <div>
        {first} <br/> 
      <button onClick={increment}>INCREMENT</button><br/>
      {isEven?"Even":"Odd"}
      <br></br>
      {second}<br/>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  )
}
