import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Email from './Email';
const Contact = ({ 
    contact, 
    isLoading, 
    editContact, 
    saveNewContact, 
    deleteContact,
    cancelChanges, 
    isEmailEditable,
    setIsEmailEditable}) => {
  const [firstName, setFirstName] = useState(contact?.firstName);
  const [lastName, setLastName] = useState(contact?.lastName);
  const [emails, setEmails] = useState(contact?.emails);
  const [newEmails, setNewEmails] = useState([]);

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
    setNewEmails(prevState=> [...prevState,''])
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
            && contact.emails.map((email,index)=> {
              return(
                <Email email={email} 
                  contact={contact} 
                  index={index} 
                  toggleEmail={toggleEmail}
                  key={`contact-${contact.id}-email-${index}`}
                  isEmailEditable={isEmailEditable}
                  setIsEmailEditable={setIsEmailEditable}
                />
              )
            })
          }
          {
            newEmails.map((newEmail,index)=>{
              return(
                <li>
                  <input type='text' 
                  placeholder='Enter new email...' 
                  value={newEmail}
                  onChange={()=>editNewEmail}
                  key={`new-email-${index}`}
                  // required
                  />
                </li>
              )
            })
          }
          <li className="add-email" onClick={()=>addEmail()}>
            <div>
              <FontAwesomeIcon icon={faPlusCircle} />
            </div>  
            <p>add email</p>
          </li>
        </ul>
      </section>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting")
    if (!!contact.new && contact.new){
      saveNewContact(createBody())
    } else {
      editContact(contact.id, createBody())
    }
  }

  const createBody = () =>{
    const body = {
      'firstName': firstName.trim(),
      'lastName': lastName.trim(),
      'emails': emails,
    }
    return body
  }

  const CrudButtons = () => {
    return(
      <section className="crud-buttons">
        <button className="delete"
        onClick={()=>deleteContact(contact.id)}
        type="button"
        >Delete</button>
        <div>
          <button className="cancel"
           onClick={()=>{
              setFirstName(contact.firstName)
              setLastName(contact.lastName)
              setEmails(contact.emails)
              cancelChanges(contact.id)
             }}   
           type="button"       
          >Cancel</button>
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
    onSubmit={(e)=>{handleSubmit(e)}}
    >
      {
        isLoading 
        ? <h3 className="loading">Loading...</h3>
        : <fieldset>
          <section className="edit-name">
            <div className="edit-name__first">
              <label htmlFor="contact-first-name" >First Name</label>
              <input type="text" id="contact-first-name" name="first-name" 
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
              value={firstName}
              placeholder="Enter first name..."
              required
              autoFocus
              />
            </div>
            <div className="edit-name__last">
              <label htmlFor="contact-last-name">Last Name</label>
              <input type="text" id="contact-last-name" name="last-name" 
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
              value={lastName}
              placeholder="Enter last name..."
              required
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
