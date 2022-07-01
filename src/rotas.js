import React from 'react' 
import {HashRouter,Routes,Route} from 'react-router-dom' 
import Home from './views/home'
import CadastroProduto from './views/produtos/cadastros'



export default() => {
    return( // configuração de rotas 
        <HashRouter>
            <Routes>
                <Route exact path="/cadastro-produtos" component={CadastroProduto}/>
                <Route exact path="/" component={Home}/>
            </Routes>
        </HashRouter>
    )
}