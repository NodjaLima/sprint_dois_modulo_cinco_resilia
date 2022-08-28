import { Link } from 'react-router-dom'

import './menu.css'

const Menu = () => {
  return ( 
    <div className="menu-container">
      <Link to='/'><p>Home</p></Link>
      <Link to='/cadastro'><p>+Cadastrar</p></Link>
      <Link to='/clientes'><p>Clientes</p></Link>
    </div>
   );
}
 
export default Menu;