import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  const EditName = () =>{
    return(
      <section className="edit-name">
        <div className="edit-name__first">
          <label for="contact-first-name">First Name</label>
          <input type="text" id="contact-first-name" name="first-name" />
        </div>
        <div className="edit-name__last">
          <label for="contact-last-name">Last Name</label>
          <input type="text" id="contact-last-name" name="last-name" />
          </div>
      </section>
    )
  }

  const EditEmails = () => {
    return(
      <section name="contact-emails" className="contact-emails">
        <label for="contact-emails">Email</label>
        <ul>
          {
            // contactDat?.emails.map(email=> {
            //   return(
            //   <li>{email}</li>
            // )})
          }
        </ul>
        <AddEmail/>
      </section>
    )
  }

  const AddEmail = () => {
    return(
      <div className="add-email">
        <FontAwesomeIcon icon={faPlusCircle} />
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
      <fieldset>
        <EditName/>
        <EditEmails/>
        <CrudButtons/>
      </fieldset>
    </form>
  );
}

export default Contact;
