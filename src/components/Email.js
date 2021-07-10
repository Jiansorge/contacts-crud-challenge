import React from 'react';
import '../App.css'
import { RiDeleteBack2Fill  } from 'react-icons/ri';
import { AiOutlineUndo } from 'react-icons/ai';


const Email = ({
    email, 
    toggleEmail,
    isEnabled
  }) => {

  return (
    <li className={ isEnabled ? '': 'deselected'}
    onClick={()=>{
      toggleEmail(email, isEnabled)
    }}
    >
      <p className="contact-email"
      >
        {email}
      </p>
    
      {
        isEnabled
        ?<span className="contact-delete-email"
        ><RiDeleteBack2Fill/></span>
        : <span className="contact-restore-email"
        ><AiOutlineUndo/></span>
      }
    </li>
  );
}

export default Email;
