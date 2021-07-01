import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const ContactList = ({ isLoading, contacts, selectContact }) => {
  const Contacts = () =>{
    return(
      <ul>
        {
          !isLoading && !!contacts && contacts.length>0 
          && Object.values(contacts).map((person,index)=>{
              return(<li className="contact-list__item" 
              key={`contact-${person.id}`}
              onClick={()=>selectContact(person.id)}
              >
                {person.firstName} {person.lastName}
              </li>)
          })
        }
      </ul>
    )
  }

  return (
    <div className="contact-list">
      <header>
        <h1>Contacts</h1>
        <div className="contact-list__icon">
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </header>
      <Contacts/>   
    </div>
  );
}

export default ContactList;
