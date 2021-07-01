import React, {useState, useEffect,} from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const selectContact=(contactId)=>{
    setContact(contacts.find(person=>person.id===contactId))
  }

  const editContact=(contactId, body)=>{
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    console.log("body",body)
    console.log("request options", requestOptions)
    fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          const tempData = contacts
          tempData[tempData.findIndex(person=>person.id===contactId)] = data
          setContacts(tempData)
          console.log("tempData",tempData)
          console.log('data',data)
      })
        .then(setIsLoading(true))
        .catch(e=>console.log(e))
    }

  // const deleteContact=(contactId)=>{

  // }

  // const addContact=()=>{

  // }

  useEffect(() => {
    if(isLoading){
      fetch('https://avb-contacts-api.herokuapp.com/contacts/paginated')
      .then( response =>response.json())
      .then(data=>{
        setContacts(data.contacts)
        setContact(data.contacts[0])
      })
      .then(setIsLoading(false))
      .catch(error => {
          setErrorMessage({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
    }
    console.log("contacts",contacts)
    console.log("contact",contact)
  }, [contacts, isLoading]);

  return (
    <div className="app">
        <ContactList isLoading={isLoading} 
          contacts={contacts} 
          selectContact={selectContact}/>
        <Contact contact={contact} isLoading={isLoading}
          editContact={editContact}/>
    </div>
  )
}

export default App;
