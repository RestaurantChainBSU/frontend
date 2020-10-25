import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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

          <Form inline>
            <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
            <Button variant="outline-success">Поиск</Button>
          </Form>
          
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;
