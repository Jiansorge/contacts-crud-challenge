import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const Contact = ({ contact, isLoading }) => {
  const EditName = () =>{
    return(
      <section className="edit-name">
        <div className="edit-name__first">
          <label htmlFor="contact-first-name">First Name</label>
          <input type="text" id="contact-first-name" name="first-name" 
          value={contact.firstName}/>
        </div>
        <div className="edit-name__last">
          <label htmlFor="contact-last-name">Last Name</label>
          <input type="text" id="contact-last-name" name="last-name" 
          value={contact.lastName}/>
          </div>
      </section>
    )
  }

  const EditEmails = () => {
    return(
      <section name="contact-emails" className="contact-emails">
        <label htmlFor="contact-emails">Email</label>
        <ul>
          {
            Object.values(contact.emails).map(email=> {
              return(<li>{email}</li>)})
          }
        </ul>
        <AddEmail/>
      </section>
    )
  }

  const AddEmail = () => {
    return(
      <div className="add-email">
        <div>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>  
        <p>add email</p>
      </div>
    )
  }

  const CrudButtons = () => {
    return(
      <section className="crud-buttons">
        <button className="delete">Delete</button>
        <div>
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      </section>
    )
  }

  return (
    <form className="contact">
      {
        !isLoading && !!contact &&
        <fieldset>
          <EditName/>
          <EditEmails/>
          <CrudButtons/>
        </fieldset>
      }
    </form>
  );
}

export default Contact;
