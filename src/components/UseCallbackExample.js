import React , {useCallback, useState } from 'react'
import Todos from './Todos'; 


export default function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([])
    function increment(){
        setCount(count+1);
    }
const addTodo = useCallback(()=>{
setTodo([...todo,"new Todo"])

},[todo]);

  return (
    <div>
        <Todos t={todo} addTodo={addTodo}/>
        <p>{count}</p>
        
      <button onClick={increment}>increment</button>
    </div>
  )
}
