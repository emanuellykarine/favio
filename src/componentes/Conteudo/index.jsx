import React, { useState } from 'react'
import styles from './Conteudo.module.css'

const Conteudo = () => {

const [nome_site, setNomeSite]=useState('');
const [url, setUrl]=useState('')

let favoritos=[]


  function salvarFavorito(){
    console.log('favoritos>>>>>>>>', favoritos)
    favoritos=[...favoritos, {nome_site, url}]
    localStorage.setItem("favorito",JSON.stringify({favoritos}))
  }

  return (
    <div className={styles.area}>
        Conteudo
    <form className={styles.formulario} onSubmit={()=>alert("Favorito salvo")}>
        <label>
            Nome do Site
        </label> 
        <h1>{nome_site}</h1>
        <input name='nome_site' onChange={(evento)=> {setNomeSite(evento.target.value); console.log(nome_site);}}></input> <br/>
        <label>
            URL
        </label>
        <h1>{url}</h1>
        <input type='url' name='url' onChange={(evento)=> {setUrl(evento.target.value); console.log(url);}}></input>  <br/>
        <button onClick={()=>salvarFavorito()}>Salvar</button>
    </form>
    </div>
  )
}

export default Conteudo;