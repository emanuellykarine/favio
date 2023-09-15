import React from 'react'

const index = () => {
  return (
    <div>
        Conteudo 
        <form onSubmit={()=>alert("Favorito salvo")}>
            <label> Nome do site</label>
            <input name='nome-site'/>

            <label >url</label>

            
        </form>
    </div>
  )
}

export default index