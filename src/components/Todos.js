import React from 'react';
import {memo} from 'react';
 

 function Todos(props) {
    console.log("todo is reading");
  return (
    <div>
      <h2>MY TODOS</h2>
     { props.t.map((element,index)=>{

        return <p key={index}>{element + index}</p>
      })}

    <button onClick={props.addTodo}>ADD TODO</button>  
    </div>)
}
export default memo(Todos);