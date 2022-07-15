import React from 'react'
import Navbar from './components/navbar'// navbar importada
import Rotas from './rotas'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (

    //a navbar que estar abaixo veio da navbar.js que ja esta importada
  <BrowserRouter>
    <>
      <div className='container'>
        <Navbar />
        <Rotas />
      </div>
    </>
    </BrowserRouter>
  );
}
// browserRouter importada, foi retirada rota pq dava conflito
export default App;
