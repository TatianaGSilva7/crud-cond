import react, {useState} from "react";
import  './App.css';

//importa os componentes de seus rescpectivos arquivos
import Login from './Login/Login';
import Menu from "./Menu/Menu";
import Welcome from "./Welcome/Welcome";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSreen, setActiveSreen] = useState('Welcome');
  const [contacts, setContacts] = useState([
    {id:1, name:'Tatiana Silva', phone: '1621068702'},
    {id:2, name: 'Graziela Carozelli', phone:'1621068713'}]);


    const[contactToEdit, setContactToEdit] = useState(null);
    
    //Funçao de login

    const randleLogin = (username, password) => {
      if (username ==='admin' && password ==='123'){
        setIsLoggedIn(true);
      }else{
        alert('Usuário ou senha inválidos')
      }
    };

    const handleSaveContact = (contact) => {}
    const handleDeleteContact = (id) => {}
    const startEdit = (contact) => {}
    const showCreatForm = () => {}
    const handleNavigate = (sreen) =>{}


    if(!isLoggedIn){
      return <Login onLogin={randleLogin}/>
    }
    return(
      <div>
        <Menu onNavigate={handleNAvigate} onCreate={showCreatForm}/>
        <main className='content'>
          {activeSreeen ==='Welcome' && <Welcome/>}
          {activeSreen === 'list' && <ContactList contacts={contacts}
                            onEdit={startEdit}/>}
          {activeSreen === 'form' && <ContactForm
                            contactToEdit={contactToEdit}
                            onSave={handleSaveContact}/>}


        </main>
      </div>
    )

    
   

}export default App;
