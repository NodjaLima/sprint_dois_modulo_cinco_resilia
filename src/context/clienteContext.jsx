import { createContext, useState } from "react";

export const ClienteContext = createContext();

export const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([{
    nome: 'teste nome',
    sobrenome: 'teste sobrenome',
    email: 'teste email',
    telefone: 'teste telefone',
    endereco1: 'teste endereco1',
    endereco2: 'teste endereco2',
    nascimento: 'teste nascimento',
    cpf: 'teste cpf',
    renda_mensal: 'teste renda_mensal'
  }])

  const handleSubmit = (clientes) => {

    setClientes(clientes)

    console.log('dados provider', { clientes })

  }

  return(
    <ClienteContext.Provider value={{ clientes, submit: handleSubmit }}>
      {children}
    </ClienteContext.Provider>
  )
}