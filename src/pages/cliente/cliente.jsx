import { useContext } from "react"
import { ClienteContext } from "../../context/clienteContext"
import { useParams, Link } from 'react-router-dom';

import './cliente.css'

const Cliente = () => {
  let { id } = useParams()
  const { clientes } = useContext(ClienteContext)

  const cliente = clientes.filter((cliente, index) => index + 1 == id)

  console.log(cliente)

  return ( 
    <div className="cliente-container">
      <h1>Detalhes do Cliente</h1>
      <div>
        <p>Nome: {cliente[0].nome} {cliente[0].sobrenome}</p>
        <p>E-mail: {cliente[0].email}</p>
        <p>Telefone: {cliente[0].telefone}</p>
        <p>Endereço1: {cliente[0].endereco1}</p>
        <p>Endereço2: {cliente[0].endereco2}</p>
        <p>Data de Nascimento: {cliente[0].nascimento}</p>
        <p>CPF: {cliente[0].cpf}</p>
        <p>Renda Mensal: {cliente[0].renda_mensal}</p>
      </div>     
      <Link to='/clientes' ><button>Voltar</button></Link>
    </div>
   )
}
 
export default Cliente;

