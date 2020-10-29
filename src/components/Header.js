import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar>
      <Navbar.Brand>Restaurant Chain Admin</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/restaurants" className="nav-link">Рестораны</NavLink>
            <NavLink to="/dishes" className="nav-link">Блюда</NavLink>
            <NavLink to="/orders" className="nav-link">Заказы</NavLink>
          </Nav>
          
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;
