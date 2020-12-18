import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <Navbar>
      <Navbar.Brand>Restaurant Chain Admin</Navbar.Brand>
      {props.authed &&
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/restaurants" className="nav-link">Рестораны</NavLink>
                <NavLink to="/dishes" className="nav-link">Блюда</NavLink>
                <NavLink to="/orders" className="nav-link">Заказы</NavLink>
              </Nav>
              <Button variant="primary" style={{marginRight: '20px'}}><Link to='/new-restaurant' style={{ color: 'white' }}>Добавить ресторан</Link></Button>
              <Button variant="primary"><Link to='/new-dish' style={{ color: 'white' }}>Добавить блюдо</Link></Button>
            </Navbar.Collapse>
      }
    </Navbar>
    );
}

export default Header;
