import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" elements={<Principal/>}> </Route>
                <Route path="/login" elements={<Login/>}> </Route>
                <Route path="/cadastro" elements={<Cadastro/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;