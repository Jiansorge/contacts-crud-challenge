import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const ContactList = ({ isLoading, contacts, contact, selectContact, addContact }) => {
  const Contacts = () =>{
    return(
      <ul>
        { 
          !isLoading && !!contacts && contacts.length > 0 
          && contacts.sort((a,b)=>{
            return a.firstName.toUpperCase() > b.firstName.toUpperCase()
          })
          .sort((a,b)=>{
            return a.lastName.toUpperCase() > b.lastName.toUpperCase()
          })
          .map((person,index)=>{
              return(
                <li className={`contact-list__item ${!!contact && contact.id === person.id && 'selected'}`}
                onClick={()=>selectContact(person.id)}
                key={`new-contact-${person.id}`}
                >
                  {person.firstName} {person.lastName}
                </li>
              )
          })
        }
        {
          !!contact && !!contact.new && contact.new
          && <li className={`contact-list__item new selected`}
            >
              (new contact)
            </li>
        }
      </ul>
    )
  }

  return (
    <div className="contact-list">
      <header>
        <h1>Contacts</h1>
        <div className="contact-list__icon"
        onClick={()=>addContact()}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </header>
      <Contacts/>   
    </div>
  );
}

export default ContactList;
