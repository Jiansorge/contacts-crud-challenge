import React, {useState, useEffect,} from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

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
        .then(setIsLoading(true))
        .catch(e=>console.log(e))
    }

  const addContact=()=>{
    setContact(newContact())
  }

  const saveNewContact=(body)=> {
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
        .then(setIsLoading(true))
        .catch(e=>console.log(e))
    }

  const deleteContact=(contactId)=>{
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
            if (tempIndex !== tempData.length-1 && tempData.length >0){
              setContact(tempData[tempIndex])
            } else if(tempData.length > 0) {
              setContact(tempData[0])
            } else {
              setContact(newContact())
            }
            setContacts(tempData)
        })
          .then(setIsLoading(true))
          .catch(e=>console.log(e))
      }
  }

  const cancelChanges = (id) => {
    if(contact.new){
      selectContact(0)
    } else {
      selectContact(id)
    }
  }

  useEffect(() => {
    if(isLoading){
      fetch('https://avb-contacts-api.herokuapp.com/contacts/paginated')
      .then( response =>response.json())
      .then(data=>{
        setContacts(data.contacts)
        if (data.contacts.length > 0 && !!contact ){
          setContact(data.contacts[0])
        }
      })
      .then(setIsLoading(false))
      .catch(error => {
          // setErrorMessage({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
    }
  }, [contacts, contact, isLoading]);

  useEffect(()=>{
   if(contact === undefined && !!contacts){
      setContact(contacts[0])
    } else if (contact === undefined && contacts.length === 0) {
      setContact(newContact())
    }
  },[contact,contacts])

  console.log("contacts",contacts)
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
