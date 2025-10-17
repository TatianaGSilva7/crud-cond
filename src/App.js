import React, {useState, useEffect} from "react";
import  './App.css';

//importa os componentes de seus rescpectivos arquivos
import Login from './Login/Login';
import Menu from "./Menu/Menu";
import Welcome from "./Welcome/Welcome";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('welcome');
  const [contacts, setContacts] = useState([
    {id:1, name:'Tatiana Silva', phone: '1621068702'},
    {id:2, name: 'Graziela Carozelli', phone:'1621068713'}]);


    const[contactToEdit, setContactToEdit] = useState(null);

    //Funçao de login

    const handleLogin = (username, password) => {
      if (username ==='admin' && password ==='123'){
        setIsLoggedIn(true);
      }else{
        alert('Usuário ou senha inválidos')
      }
    };


    const handleSaveContact = (contact) => {
      if(contact.id){
        //se o contact.id tem um valor então é uma atualização
        setContacts(contacts.map(c => c.id === contact.id ? contact: c));
        alert("Contato alterado com sucesso!");
      }else{
        contact.id = Date.now();
        setContacts([...contacts, contact]);
        alert("Contato cadastrado com sucesso!");
      }
      setActiveScreen('list');
      setContactToEdit(null);
    }


    const handleDeleteContact = (id) => {
      setContacts(contacts.filter(c => c.id !== id));
      alert("Contato removido com sucesso!");
    }


    const startEdit = (contact) => {
      setContactToEdit(contact);
      setActiveScreen('form');
    }


    const showCreatForm = () => {
      setContactToEdit(null);
      setActiveScreen('form');
    }

    const handleNavigate = (screen) =>{
      if(screen === 'logout'){
        setIsLoggedIn(false);

      }else{
        setActiveScreen(screen);
      }
    }

    if(!isLoggedIn){
      return <Login onLogin={handleLogin}/>
    }
    return(
      <div className="app-container">
        <Menu onNavigate={handleNavigate} onCreate={showCreatForm}/>
        <main className='content'>
          {activeScreen ==='welcome' && <Welcome/>}
          {activeScreen === 'list' && <ContactList contacts={contacts}
                            onEdit={startEdit}
                            onDelete={handleDeleteContact}/>}
          {activeScreen === 'form' && <ContactForm
                            contactToEdit={contactToEdit}
                            onSave={handleSaveContact}/>}


        </main>
      </div>
    )
 }export default App;
