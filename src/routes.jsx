import React from 'react'

const routes = () => {
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

export default routes