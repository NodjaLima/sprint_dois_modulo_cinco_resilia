import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ClienteContext } from "../../context/clienteContext"

import './clientes.css'

const Clientes = () => {
  const { clientes } = useContext(ClienteContext)

  console.log(clientes)
  
    return ( 
    <div className="clientes-container">
      <h1>Lista de Clientes Cadastrados</h1>
      <div>
      {clientes.map((cliente, index) => {
        return (
          <Link to={`/cliente/${index + 1}`} ><p>{`Cadastro ${index + 1}: ${cliente.nome} ${cliente.sobrenome}`}</p></Link>
        )
      })}
      </div>
      
    </div>
   )
}
 
export default Clientes;