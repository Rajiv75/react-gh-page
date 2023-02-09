import React , {useContext} from 'react';
import { Firstname, Lastname } from './First';

export default function Thir() {
    const x=useContext(Firstname);
    const y=useContext(Lastname);
    return (
    <div>
      first Name is {x} <br/>
      Last Name is {y}
    </div>
  )
}
