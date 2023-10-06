import React, { useState } from 'react'
import styles from './Cadastro.module.css'

const Cadastro = () => {

const [email, setEmail]=useState('');
const [nome, setNome]=useState('')
const [senha, setSenha]=useState('')
const [confSenha, setConfSenha]=useState('')
const [salvar, setSalvar]=useState([])

  function salvarUsuario(){
    if (senha === confSenha) {
      setSalvar([...salvar, {email, nome, senha}])
      console.log('Dados Usuário>>', "Email", email, "Nome", nome)
      localStorage.setItem("senha",JSON.stringify({salvar}))
      console.log(salvar)
    } else {
      alert  ("As senha não coincidem");
    }
  }

  return (
   <>
        <h1>Cadastro de Usuário</h1> 

       <label> Email</label> 
            <input name='email' onChange={(evento)=> 
                {setEmail(evento.target.value);}}>
            </input> <br/>

        <label> Nome do usuário </label> 
            <input name='nome' onChange={(evento)=> 
                {setNome(evento.target.value);}}>
            </input> <br/>

        <label> Senha </label> 
            <input type='password' name='senha' onChange={(evento)=> 
                {setSenha(evento.target.value);}}>
            </input> <br/>

        <label> Confirmação de senha  </label> 
            <input type='password' name='confSenha' onChange={(evento)=> 
                {setConfSenha(evento.target.value);}}>
            </input> <br/>

       <input type="button" value="Salvar" onClick={()=> salvarUsuario()}/>



   
    </>
  )
}

export default Cadastro;