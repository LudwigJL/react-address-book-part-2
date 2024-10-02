import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ContactsSection from './components/ContactsSection';
import { createContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import ContactListItem from './components/ContactsSection/contactListItem';

const ContactContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(()=> {
        axios.get('https://boolean-uk-api-server.fly.dev/LudwigJL/contact')
        .then(res => setContacts(res.data));
    }, [])

    console.log('appjsx')
    console.log(contacts)

    return (
        <>
        <ContactContext.Provider value={ {contacts } }>
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/contacts' element={<ContactsSection />}></Route> 
            <Route path='/contacts/view/:id' element={<ContactListItem />}></Route>           
        </Routes>
        </ContactContext.Provider>
        
       
        </>
      )
}

export {App, ContactContext};

