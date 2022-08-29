import { createContext, useState } from "react";

export const ClienteContext = createContext();

export const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([])

  return(
    <ClienteContext.Provider value={{ clientes, setClientes }}>
      {children}
    </ClienteContext.Provider>
  )
}