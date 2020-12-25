import { React, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import adminService from '../services/AdminService';

class RestaurantDetail extends Component {

  constructor(props) {
    super();

    this.id = props.match.params.id;

    this.state = {
      restaurant: null,
      editable: false,
    };

  }

  componentDidMount() {
    this._loadRestaurant();
  }

  render() {
    const restaurant = this.state.restaurant;
    return (
      <>
        {restaurant != null &&
          <div style={{ marginLeft: '30px', marginTop: '30px', width: '1200px' }}>
            <Form.Group>
              <Form.Label style={{ fontSize: '30px' }}>Название ресторана</Form.Label>
              <Form.Control type="text" defaultValue={restaurant.rest_name} disabled={!this.state.editable} 
                onChange={ event =>  this._updateRestaurantField('rest_name', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Адрес ресторана</Form.Label>
              <Form.Control type="text" defaultValue={restaurant.address} disabled={!this.state.editable}
                onChange={ event =>  this._updateRestaurantField('address', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Описание ресторана</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={restaurant.rest_descr} disabled={!this.state.editable} 
                onChange={ event =>  this._updateRestaurantField('rest_descr', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Ссылка на изображение</Form.Label>
              <Form.Control type="text" defaultValue={restaurant.image_link} disabled={!this.state.editable}
                onChange={ event =>  this._updateRestaurantField('image_link', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Широта</Form.Label>
              <Form.Control type="text" defaultValue={restaurant.latitude} disabled={!this.state.editable}
                onChange={ event =>  this._updateRestaurantField('latitude', event.target.value) } />

              <Form.Label style={{ fontSize: '30px', marginTop: '20px' }}>Долгота</Form.Label>
              <Form.Control type="text" defaultValue={restaurant.longitude} disabled={!this.state.editable}
                onChange={ event =>  this._updateRestaurantField('longitude', event.target.value) } />    

              {this.state.editable &&
                <Button style={{ marginTop: '30px' }} onClick={ () => this._handleSaveChangesClick() }>Сохранить</Button>
              }
              {!this.state.editable &&
                <Button style={{ marginTop: '30px' }} onClick={ () => this._handleEditRestaurantClick() }>Редактировать</Button>
              }
            </Form.Group>
          </div>
        }
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

  _handleEditRestaurantClick() {
    this.setState({
      editable: true,
    });
  }

  async _handleSaveChangesClick() {
    this.setState({
      editable: false,
    });

    await adminService.updateRestaurant(this.state.restaurant);
    this.props.history.push(`/restaurants/${this.id}`);
  }

  _loadRestaurant() {
    adminService.getRestaurantById(this.id).then(restaurant => {
      this.setState({
        restaurant
      });
    });

  }

}

export default RestaurantDetail;
