import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Cabecalho logo="barbie.png" titulo="BARBIE" />
            <Routes>
                <Route path="/" element={<Principal/>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
                <Route path="/cadastro" element={<Cadastro/>}> </Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default Rotas;