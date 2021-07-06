import React, { useState } from 'react';
import '../App.css'
import { RiDeleteBack2Fill  } from 'react-icons/ri';


const Email = ({
    email, 
    contact, 
    index, 
    toggleEmail,
    isEmailEditable, 
    setIsEmailEditable,
  }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const container = React.useRef(null);
  
  function useEmailDeselector(ref) {
    React.useEffect(() => {
      if (isEmailEditable === index){
        function handleOutsideClick(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsEmailEditable(null)
          }
        }
        document.addEventListener("click", handleOutsideClick);        
        return () => {
          document.removeEventListener("click", handleOutsideClick)
        }
      }
    } , [ref]);
  }

  useEmailDeselector(container)

  return (
  <li className={isEnabled? '': 'deselected'}
  ref={container}
  >
    {
      (isEmailEditable===index)
      ? <input type='text' 
      placeholder='Enter new email...' 
      value={email}
      //onChange={()=>}
      key={`new-email-${index}`}
      // required
      />
      : <p  onClick={()=>{
        setIsEmailEditable(index)
      }}
      >
        {email}
      </p>
    }

    <span className="contact-delete-email"
    onClick={()=>{
      // if(email){
        
      // }{
        setIsEnabled(!isEnabled)
        toggleEmail(email, index, isEnabled)
      // }
    }}
    ><RiDeleteBack2Fill/></span>
  </li>
  );
}

export default Email;
