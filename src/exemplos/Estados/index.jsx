import React, { useState } from 'react'

const Estados = () => {

    const [nome, setNome]=useState("Google")
    const [url, setUrl]=useState("http://www.google.com")
    const [favoritos, setFavoritos]=useState([])

    function adicionaFavorito(nome, url){
        let favorito={nome, url}
        setFavoritos([...favoritos, favorito])
        console.log(favoritos)
    }

    function handleInput(valor){
        setNome(valor)
    }

  return (
    <div> 
    <h1>Estados</h1>
    <h1>{nome}</h1>
    <input type="text" value={nome} onChange={(e)=>handleInput(e.target.value)}/>
    <h1>{url}</h1>
    <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
    <button onClick={()=>adicionaFavorito(nome,url)}>Adicionar</button>
    <h1>Favoritos</h1>
    <ul>
    {favoritos.map(
        (elemento)=>{
            return (
                <li>{elemento.nome}</li>
            )
    }
    )}
    </ul>
    </div>
  )
}

export default Estados;