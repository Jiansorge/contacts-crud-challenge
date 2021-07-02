import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Email from './Email';
const Contact = ({ contact, isLoading, editContact }) => {
  const [firstName, setFirstName] = useState(contact?.firstName);
  const [lastName, setLastName] = useState(contact?.lastName);
  const [emails, setEmails] = useState(contact?.emails);
  const [newEmails, setNewEmails] = useState(['','']);

  const toggleEmail = (email, index, isEnabled) => {
    const tempEmails = emails
    if (isEnabled){
      tempEmails.splice(index, 1)
      setEmails(tempEmails)
    } else if (!emails.find(el => el === email)){
      tempEmails.splice(index, 0, email)
      setEmails(tempEmails)
    }
  }

  const addEmail = () => {
    setNewEmails(newEmails.push(''))
    console.log("new emails", newEmails)
  }

  const editNewEmail = () => {

  }

  const EditEmails = () => {
    return(
      <section name="contact-emails" className="contact-emails">
        <label htmlFor="contact-emails">Email</label>
        <ul>
          {
            !!contact && !!contact.emails 
            && Object.values(contact.emails).map((email,index)=> {
              return(
                <Email email={email} 
                  contact={contact} 
                  index={index} 
                  toggleEmail={toggleEmail}
                  key={`contact-${contact.id}-email-${index}`}
                />
              )
            })
          }
          <AddEmail/>
        </ul>
      </section>
    )
  }

  const AddEmail = () => {
    return(
      <div className='new-emails'>
        {
          newEmails.map((newEmail,index)=>{
            return(
              <input type='text' placeholder='New email' 
              value={newEmail}
              onChange={()=>editNewEmail}
              key={`new-email-${index}`}
              ></input>
            )
          })
        }
        <div className="add-email" onClick={()=>addEmail()}>
          <div>
            <FontAwesomeIcon icon={faPlusCircle} />
          </div>  
          <p>add email</p>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(contact.id, createBody())
  }

  const createBody = () =>{
    const body = {
      'firstName': firstName,
      'lastName': lastName,
      'emails': emails
    }
    return body
  }

  const CrudButtons = () => {
    return(
      <section className="crud-buttons">
        <button className="delete">Delete</button>
        <div>
          <button className="cancel">Cancel</button>
          <button className="save" 
          type='submit'
          >Save</button>
        </div>
      </section>
    )
  }

  useEffect(() => {
    if(!!contact){
      setFirstName(contact.firstName)
      setLastName(contact.lastName)
      setEmails(contact.emails)
    }
  }, [contact]);

  useEffect(()=>{
    console.log("emails in state",emails)
  },[emails])

  console.log("rerendering contact")
  return (
    <form className="contact"
    onSubmit={(e)=>handleSubmit(e)}
    >
      {
        !isLoading && 
        <fieldset>
          <section className="edit-name">
            <div className="edit-name__first">
              <label htmlFor="contact-first-name" >First Name</label>
              <input type="text" id="contact-first-name" name="first-name" 
              onChange={(e)=>setFirstName(e.target.value)}
              value={firstName}
              autoFocus
              />
            </div>
            <div className="edit-name__last">
              <label htmlFor="contact-last-name">Last Name</label>
              <input type="text" id="contact-last-name" name="last-name" 
              onChange={(e)=>setLastName(e.target.value)}
              value={lastName}
              />
              </div>
          </section>
          <EditEmails/>
          <CrudButtons/>
        </fieldset>
      }
    </form>
  );
}

export default Contact;
