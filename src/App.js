import React, {useState, useEffect,} from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  // const getSingleContact=(contactId)=>{

  // }

  // const editContact=(contactId)=>{

  // }

  // const deleteContact=(contactId)=>{

  // }

  // const addContact=()=>{

  // }

  useEffect(() => {
    if(!!contacts && contacts.length===0){
      fetch('https://avb-contacts-api.herokuapp.com/contacts/paginated')
      .then( response =>response.json())
      .then(data=>setContacts(data.contacts))
      .then(setIsLoading(false))
      .catch(error => {
          setErrorMessage({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
    }
  }, [contacts]);

  useEffect(()=>{
    setContact(Object.values(contacts)[0])
  }, [contacts, contact])

  return (
    <div className="app">
        <ContactList isLoading={isLoading} contacts={contacts}/>
        <Contact contact={contact} isLoading={isLoading}/>
    </div>
  );
}

export default App;
