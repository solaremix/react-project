import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Todos from '../routing-examples/Todos';

export const Login1 = (props) => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='auth-form-container'>
            <h1 className='tittle'>BIENVENIDO A RESTDELUXE</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor = "email" >Correo</label>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder = "tucorreo@hotmail.com" id="email" name="email"/>
                <label htmlFor = "password" >Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder = "*************" id="password" name="password"/>
                <Link to='/Todos'><button type="submit" >Log In</button></Link>
                <Routes>
                    <Route path='/Todos' element={<Todos />} />
                </Routes>

                   
            </form>
            <button className ="link-btn"  onClick={() => props.onFormSwitch("register")}>¿Aun no tienes una cuenta? Registrate</button>
        </div>
    )
}