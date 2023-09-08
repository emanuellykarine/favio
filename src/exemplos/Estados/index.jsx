import React, { useState } from 'react'

const Estados = () => {

    const [nome, setNome]=useState("")
    const [url, setUrl]=useState("")

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
    <button>Adicionar</button>
    </div>
  )
}

export default Estados;