import React from 'react'
import Navbar from './components/navbar'// navbar importada
import Rotas from './rotas'




function App() {
  return (
    //a navbar que estar abaixo veio da navbar.js que ja esta importada
    <>
      <div className='container'>
        <Navbar />
        <Rotas />
      </div>
    </>
  );
}

export default App;
