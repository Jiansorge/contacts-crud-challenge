import React, {useState, useEffect,} from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  const [isMounted, setIsMounted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const newContact = () => {
    return (
      {
        'firstName':'',
        'lastName':'',
        'emails':[],
        'new':true,
        'id': Date.now()
      }
    )
  }

  const [contact, setContact] = useState(newContact());

  const selectContact=(contactId)=>{
    setContact(contacts.find(person=>person.id===contactId))
  }

  const editContact=(contactId, body)=>{
    setIsLoading(true)
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const tempData = [...contacts]
        tempData[tempData.findIndex(person=>person.id===data.id)] = data
        setContacts(tempData)
        setContact(data)
      })
      .then(setIsLoading(false))
      .catch(e=>console.log(e))
    }

  const addContact=()=>{
    setContact(newContact())
  }

  const saveNewContact=(body)=> {
    setIsLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body) 
    };
    fetch(`https://avb-contacts-api.herokuapp.com/contacts/`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const tempData = [...contacts]
        tempData.push(data)
        setContacts(tempData)
        setContact(data)
      })
      .then(setIsLoading(false))
      .catch(e=>console.log(e))
    }

  const deleteContact=(contactId)=>{
    setIsLoading(true)
    if (contact.new){
      setContact(contacts[0])
    } else {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`, requestOptions)
        .then(data => {
          const tempData = [...contacts]
          const tempIndex = tempData.findIndex(person=>person.id===contactId)
          tempData.splice(tempIndex,1)
          if (tempIndex < tempData.length && tempData.length >0){
            setContact(tempData[tempIndex])
          } else if(tempData.length > 0) {
            setContact(tempData[0])
          } else {
            setContact(newContact())
          }
          setContacts(tempData)
        })
        .then(setIsLoading(false))
        .catch(e=>console.log(e))
      }
  }

  const cancelChanges = (id) => {
    if(contact.new){
      setContact(contacts[0])
    } else {
      selectContact(id)
    }
  }

  useEffect(() => {
    if(isMounted){
      fetch('https://avb-contacts-api.herokuapp.com/contacts/paginated')
      .then( response =>response.json())
      .then(data=>{
        setContacts(data.contacts)
        if (data.contacts.length > 0 && !!contact ){
          setContact(data.contacts[0])
        }
      })
      .then(setIsMounted(false))
      .then(setIsLoading(false))
      .catch(error => {
        console.error('There was an error!', error);
      });
    }
  }, [contacts, contact, isMounted]);

  useEffect(()=>{
   if(contact === undefined && !!contacts){
      setContact(contacts[0])
    } else if (contact === undefined && contacts.length === 0) {
      setContact(newContact())
    }
  },[contact,contacts])

  return (
    <div className="app"
    >
        <ContactList isLoading={isLoading} 
          contacts={contacts} 
          selectContact={selectContact}
          addContact={addContact}
          contact={contact}
        />
        <Contact contact={contact} 
          isLoading={isLoading}
          editContact={editContact}
          saveNewContact={saveNewContact}
          deleteContact={deleteContact}
          cancelChanges={cancelChanges}
          />
    </div>
  )
}

export default App;
