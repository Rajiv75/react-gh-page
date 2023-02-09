import React from 'react'
import { createContext } from 'react'
import Second from './Second';

const Firstname=createContext();
const Lastname=createContext();
export default function First() {
 
  return (
    <div>
      <Firstname.Provider value="rajiv">
      <Lastname.Provider value="Panchal">
        <Second/>
        </Lastname.Provider>
        </Firstname.Provider>
    
    </div>
  )
}

export{Firstname,Lastname};
