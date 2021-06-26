import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const ContactList = () => {
  const Contacts = () =>{
    return(
      <ul>
        {
          // data?.contacts.map(contact=>{
          //   return(
          //     <li>{contact}</li>
          //   )
          // })
        }
      </ul>
    )
  }

  return (
    <div className="contact-list">
      <header>
        <h1>Contacts</h1>
        <FontAwesomeIcon icon={faPlusCircle} />
      </header>
      <Contacts/>   
    </div>
  );
}

export default ContactList;
