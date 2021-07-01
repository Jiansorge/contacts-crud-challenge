import React, { useState } from 'react';
import '../App.css'
import { RiDeleteBack2Fill  } from 'react-icons/ri';


const Email = ({email, contact, index, toggleEmail}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
  <li  onClick={()=>{
      setIsEnabled(!isEnabled)
      toggleEmail(email, index, isEnabled)

    }}
    className={isEnabled? '': 'deselected'}
  
  >
    <p>{email}</p>
    <span className="contact-delete-email"><RiDeleteBack2Fill/></span>
  </li>
  );
}

export default Email;
