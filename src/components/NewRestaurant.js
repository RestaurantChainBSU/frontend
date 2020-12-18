import { React, Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import adminService from '../services/AdminService';

class NewRestaurant extends Component {

  constructor() {
    super();

    this.state = {
      restaurant: {
        rest_name: '',
        address: '',
        rest_descr: '',
        image_link: '',
        longitude: 0,
        latitude: 0,
      }
    };
  }

  render() {
    return (
      <>
        <div style={{ marginLeft: '30px', marginTop: '30px', width: '1200px' }}>
          <Form.Group>
            <Form.Label style={{ fontSize: '30px' }}>Название ресторана</Form.Label>
            <Form.Control type="text" placeholder='Название ресторана'
              onChange={ event =>  this._updateRestaurantField('rest_name', event.target.value) } />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Адрес ресторана</Form.Label>
            <Form.Control type="text" placeholder='Адрес ресторана'
              onChange={ event =>  this._updateRestaurantField('address', event.target.value) } />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Описание ресторана</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder='Описание'
              onChange={ event =>  this._updateRestaurantField('rest_descr', event.target.value) } />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Ссылка на изображение</Form.Label>
            <Form.Control type="text" placeholder='Ссылка на изображение'
              onChange={ event =>  this._updateRestaurantField('image_link', event.target.value) }  />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Широта</Form.Label>
            <Form.Control type="text" placeholder='Широта'
              onChange={ event =>  this._updateRestaurantField('latitude', parseFloat(event.target.value)) }  />

            <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Долгота</Form.Label>
            <Form.Control type="text" placeholder='Долгота'
              onChange={ event =>  this._updateRestaurantField('longitude', parseFloat(event.target.value)) }  />    

            <Button style={{ marginTop: '30px' }} onClick={ () => this._handleCreateRestaurantClick() }>Создать</Button>
          </Form.Group>
        </div>
      </>
    );
  }

  _updateRestaurantField(field, value) {
    const restaurant = this.state.restaurant;
    restaurant[field] = value;
    this.setState({
      restaurant
    });
  }

  async _handleCreateRestaurantClick() {
    const id = await adminService.createRestaurant(this.state.restaurant);
    this.props.history.push(`/restaurants/${id}`);
  }
  
}

export default NewRestaurant;
