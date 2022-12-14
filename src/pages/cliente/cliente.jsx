import { useContext, useState } from "react"
import { ClienteContext } from "../../context/clienteContext"
import { useParams, Link } from 'react-router-dom';

import './cliente.css'

const Cliente = () => {
  let { id } = useParams()
  const { clientes, setClientes } = useContext(ClienteContext)

  const cliente = clientes.filter((cliente, index) => index + 1 == id)

  const [final, setFinal] = useState(false)

  const deletarCliente = () => {
    const NovaLista = clientes.filter((cliente, index) => index + 1 != id)
    setClientes([...NovaLista])
    setFinal(true)
  }

  return ( 
    <div className="cliente">
    {(final === true) && (
      <div className="final">
      <h1>Cliente deletado com sucesso!</h1>
      <Link to='/clientes' ><button>Verificar lista de clientes</button></Link>
      </div>
    )}
    {(final === false) && (
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
      <div className="botoes">
      <Link to='/clientes' ><button>Voltar</button></Link>
      <button onClick={(e)=> {deletarCliente(e)}}>Deletar Cadastro</button>
      </div>  
    </div>
    )}
    </div>
   )
}
 
export default Cliente;

