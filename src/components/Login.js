import adminService from '../services/AdminService';

import { Form, Button } from 'react-bootstrap';

import { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      failedAuth: false
    }
  }

  render() {
    return (
      <Form style={{ width: '20%', marginLeft: '30px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>
          <Form.Control placeholder="Введите логин администратора" onChange={(event) => this._handleLoginChange(event.target.value) } />
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Ваш пароль" onChange={(event) => this._handlePasswordChange(event.target.value) } />
        </Form.Group>
        <Button variant="primary" onClick={() => this._handleLoginClick()}>
          Войти
        </Button>
        {
          this.state.failedAuth &&
          <Form.Text className="text-muted">
            Неправильный логин или пароль.
          </Form.Text>
        }

      </Form>
    );
  }

  _handleLoginChange(login) {
    this.setState({
      login: login
    });
  }

  _handlePasswordChange(password) {
    this.setState({
      password: password
    });
  }

  async _handleLoginClick() {
    const isAuthed = await adminService.loginAdmin(this.state.login, this.state.password);
    if (!isAuthed) {
      this.setState({
        failedAuth: true,
      });
    } else {
      this.props.auth();
      this.props.history.push(`/restaurants`);
    }
  }

}

export default Login;
