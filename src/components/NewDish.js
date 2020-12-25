import { React, Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import adminService from '../services/AdminService';

class NewDish extends Component {

  constructor() {
    super();

    this.state = {
      dish: {
        dish_name: '',
        dish_descr: '',
        image_link: '',
        price: 0,
      }
    };
  }

  render() {
    return (
      <>
        <div style={{ marginLeft: '30px', marginTop: '30px', width: '1200px' }}>
          <Form.Group>
            <Form.Label style={{ fontSize: '30px' }}>Название блюда</Form.Label>
            <Form.Control type="text" placeholder='Название блюда'
              onChange={ event =>  this._updateDishField('dish_name', event.target.value) } />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Описание блюда</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder='Описание блюда'
              onChange={ event =>  this._updateDishField('dish_descr', event.target.value) } />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Ссылка на изображение</Form.Label>
            <Form.Control type="text" placeholder='Ссылка на изображение'
              onChange={ event =>  this._updateDishField('image_link', event.target.value) }  />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Цена</Form.Label>
            <Form.Control type="text" placeholder='Цена'
              onChange={ event =>  this._updateDishField('price', parseFloat(event.target.value)) }  />    

            <Button style={{ marginTop: '30px' }} onClick={ () => this._handleCreateDishClick() }>Создать</Button>
          </Form.Group>
        </div>
      </>
    );
  }

  _updateDishField(field, value) {
    const dish = this.state.dish;
    dish[field] = value;
    this.setState({
      dish
    });
  }

  async _handleCreateDishClick() {
    const id = await adminService.createDish(this.state.dish);
    this.props.history.push(`/dishes/${id}`);
  }
  
}

export default NewDish;
