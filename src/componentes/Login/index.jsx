import React, { useState } from 'react'
import styles from './Login.module.css'

const Login = () => {

    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('')
    
      function buscarUsuario(){
     
      }
    
      return (
       <>
            <h1>Login Usuário</h1> 
    
           <label> Email</label> 
                <input name='email' onChange={(evento)=> 
                    {setEmail(evento.target.value);}}>
                </input> <br/>
    
            <label> Senha </label> 
                <input type='password' name='senha' onChange={(evento)=> 
                    {setSenha(evento.target.value);}}>
                </input> <br/>
    
           <input type="button" value="Login" onClick={()=> buscarUsuario()}/>
    
        </>
      )
    }
    
    export default Login;