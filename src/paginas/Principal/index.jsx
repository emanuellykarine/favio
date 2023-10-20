import React from 'react'
import Cabecalho from '../../componentes/Cabecalho';
import Rodape from '../../componentes/Rodape';
import Conteudo from '../../componentes/Conteudo';



const Principal = () => {
    return (
    /*O react susbtitui classname por class pq class é palavra reservada do js*/
    <>
    <Cabecalho logo="barbie.png" titulo="BARBIE" />
    <Conteudo/> 
    <Rodape />
    </>
    )
}

export default Principal