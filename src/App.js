
import './App.css';
import CustomHooks from './components/CustomHooks';
import First from './components/First';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import UseReducerExample from './components/UseReducerExample';
import Userefexample from './components/Userefexample';
// import {useState, useEffect} from 'react';

// import Second from './components/Second';
// import Thir from './components/Thir';

function App() {
  return(
// const [num, setNum] = useState(0);
// const [nums, setNums] = useState(0);
// useEffect(() => { 
//   alert("button is clicked");
// },[num])

//   return (
//   <div className="App">
//     {num}
//     <br></br>
//     <button onClick={()=>{
// setNum(num+1);
//     }
// //     ()=>{
// // alert("button is clicked")
// //     })
//   }>CLICK 1</button>
//    <div className="App">
//     {nums}
//     <br></br>
//     <button onClick={()=>{
// setNums(num+1);
//     }

//   }>CLICK 2</button>
//   </div>
  // </div>
<div>
{/*<First/> 
 <Userefexample/>

<UseMemoExample/>
<UseCallbackExample/>
<UseReducerExample/> */}
<CustomHooks/>
</div>

  );
}


export default App;
