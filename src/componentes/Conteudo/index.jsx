import React, { useState } from 'react'
import styles from './Conteudo.module.css'

const Conteudo = () => {

const [nome_site, setNomeSite]=useState('');
const [url, setUrl]=useState('')
const [favoritos, setFavoritos]=useState([])


  function salvarFavorito(){
    setFavoritos([...favoritos, {nome_site,url}])
    console.log('favoritos>>>>>>>>', favoritos)
    localStorage.setItem("favorito",JSON.stringify({favoritos}))
    console.log(favoritos)
  }

  return (
   <>
    <ul>
   {favoritos[0]!==undefined &&
   favoritos.map((favorito) => (
      <li style={{color:"black"}}>{favorito.nome_site} : {favorito.url}</li>
    ))}
    </ul>

        <div className={styles.area}>
       <h1>Conteudo</h1> 
   
    <form className={styles.formulario}>
        <label>
            Nome do Site
        </label> 
        <h1>{nome_site}</h1>
        <input name='nome_site' onChange={(evento)=> 
          {setNomeSite(evento.target.value); console.log(nome_site);}}></input> <br/>
        <label>
            URL
        </label>
        <h1>{url}</h1>
        <input type='url' name='url' onChange={(evento)=> 
          {setUrl(evento.target.value); console.log(url);}}></input>  <br/>
        <input type="button" value="Salvar" onClick={()=> salvarFavorito()}/>
        {/*<button onClick={()=>salvarFavorito()}>Salvar</button>*/}
    </form>
    </div>
    </>
  )
}

export default Conteudo;