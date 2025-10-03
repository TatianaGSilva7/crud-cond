import React, {useState} from 'react';
import './Login.css';


function Login ({onLogin}){

    const [username, setUsername] =useState("");
    const[password, setPassword] = useState("");

    const handleSumbit = (e) =>{
        e.preventDefault()
        onLogin(username, password);
    }
    return(
        <div className='login-container'>
            <form onSubmit={handleSumbit}>
                <h2>Agenda de Contatos</h2>
                
                    <input 
                    type="text"
                    placeholder="Usuário(Admin)"
                    value = {username}
                    oneChange={(e) => setUserName(e.target.value)}
                 />
                
                <input 
                    type="password"
                    placeholder="(123)"
                    value = {password}
                    oneChange={(e) => setPassword(e.target.value)}
                 />

            </form>

        </div>
    )

}export default Login;