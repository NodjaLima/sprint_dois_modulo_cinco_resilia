import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClienteProvider } from "./context/clienteContext";

import Menu from './components/menu/menu'
import Home from "./pages/home/home";
import Cadastro from "./pages/cadastro/cadastro"
import Clientes from "./pages/clientes/clientes";
import Cliente from "./pages/cliente/cliente";
import Erro from "./components/erro/erro";

import './App.css'

function App() {

  return (
    <ClienteProvider>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cadastro' exact element={<Cadastro />} />
            <Route path='/clientes' exact element={<Clientes />} />
            <Route path='/cliente/:id' exact element={<Cliente />} />
            <Route path='*' element={<Erro />} />


          </Routes>
        </BrowserRouter>
      </div>
    </ClienteProvider>
  )
}

export default App
