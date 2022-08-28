import React from 'react';
import { Link } from 'react-router-dom'

import './erro.css'

const Erro = () => {
  return ( 
  <div className='erro-container'>
    <p className='erro'>Verifique a Url, rota não encontrada!</p>
    <Link to='/' ><button>Voltar</button></Link>

  </div> );
}
 
export default Erro;