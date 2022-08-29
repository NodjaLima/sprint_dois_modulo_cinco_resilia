import { createContext, useState } from "react";

export const ClienteContext = createContext();

export const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([
    {
      nome: 'Nodja Moama',
      sobrenome: 'Pinto Lima',
      email: 'nodjamplima@gmail.com',
      telefone: '2222222222',
      endereco1: 'Rua das flores, n° 0',
      endereco2: 'ao lado do primeiro',
      nascimento: '05/02/2000',
      cpf: '22222222222',
      renda_mensal: 'Quem dera'
    },
    {
      nome: 'Marceline',
      sobrenome: 'Marcelene',
      email: 'marceline@marceline',
      telefone: '111111111',
      endereco1: 'Rua da ladeira',
      endereco2: 'Rua da ladeira',
      nascimento: '14/05/2008',
      cpf: '1111111',
      renda_mensal: '5000'
    },
    {
      nome: 'Raimundo',
      sobrenome: 'Nonato',
      email: 'raimundo@nonato',
      telefone: '44444444444',
      endereco1: 'rua dos tomateiros',
      endereco2: 'avenida das garças',
      nascimento: '08/04/2005',
      cpf: '777777777',
      renda_mensal: '30000'
    }
  ])

  return(
    <ClienteContext.Provider value={{ clientes, setClientes }}>
      {children}
    </ClienteContext.Provider>
  )
}